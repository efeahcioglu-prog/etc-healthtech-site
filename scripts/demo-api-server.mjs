import http from "node:http";
import nodemailer from "nodemailer";

const port = Number(process.env.PORT || 8080);
const allowedOrigins = (process.env.ALLOWED_ORIGINS || "https://www.etchealthtech.com")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

function getCorsOrigin(origin) {
  if (!origin) return allowedOrigins[0] || "*";
  if (allowedOrigins.includes("*") || allowedOrigins.includes(origin)) return origin;
  return "";
}

function sendJson(response, statusCode, payload, origin = "") {
  const body = JSON.stringify(payload);
  response.writeHead(statusCode, {
    "Content-Type": "application/json",
    "Content-Length": Buffer.byteLength(body),
    ...(origin ? { "Access-Control-Allow-Origin": origin } : {}),
    "Access-Control-Allow-Methods": "POST, OPTIONS, GET",
    "Access-Control-Allow-Headers": "Content-Type",
  });
  response.end(body);
}

function readBody(request) {
  return new Promise((resolve, reject) => {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk;
      if (body.length > 25_000) {
        request.destroy();
        reject(new Error("Request body too large"));
      }
    });
    request.on("end", () => resolve(body));
    request.on("error", reject);
  });
}

function cleanText(value, maxLength) {
  return String(value || "")
    .replace(/\r/g, "")
    .trim()
    .slice(0, maxLength);
}

function validatePayload(payload) {
  const name = cleanText(payload.name, 120);
  const organisation = cleanText(payload.organisation, 160);
  const email = cleanText(payload.email, 180);
  const product = cleanText(payload.product, 80);
  const message = cleanText(payload.message, 2000);

  if (!name || !organisation || !email || !product) {
    return { error: "Please complete all required fields." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: "Please enter a valid email address." };
  }

  return { value: { name, organisation, email, product, message } };
}

function createTransporter() {
  const host = process.env.SMTP_HOST;
  const portValue = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error("SMTP_HOST, SMTP_USER and SMTP_PASS must be configured.");
  }

  return nodemailer.createTransport({
    host,
    port: portValue,
    secure: String(process.env.SMTP_SECURE || "false").toLowerCase() === "true",
    auth: { user, pass },
  });
}

async function handleDemoRequest(request, response, corsOrigin) {
  const rawBody = await readBody(request);
  const parsed = JSON.parse(rawBody || "{}");
  const validation = validatePayload(parsed);

  if (validation.error) {
    sendJson(response, 400, { ok: false, error: validation.error }, corsOrigin);
    return;
  }

  const { name, organisation, email, product, message } = validation.value;
  const to = process.env.DEMO_TO || "demo@etchealthtech.com";
  const from = process.env.SMTP_FROM || process.env.SMTP_USER;
  const transporter = createTransporter();

  await transporter.sendMail({
    from,
    to,
    replyTo: email,
    subject: `ETC HealthTech demo request - ${product}`,
    text: [
      "New ETC HealthTech demo request",
      "",
      `Name: ${name}`,
      `Organisation: ${organisation}`,
      `Email: ${email}`,
      `Interested product: ${product}`,
      "",
      "Message:",
      message || "No additional message provided.",
      "",
      "Source: etchealthtech.com",
    ].join("\n"),
  });

  sendJson(response, 200, { ok: true }, corsOrigin);
}

const server = http.createServer(async (request, response) => {
  const corsOrigin = getCorsOrigin(request.headers.origin);

  if (request.method === "OPTIONS") {
    sendJson(response, 204, {}, corsOrigin);
    return;
  }

  if (request.method === "GET" && request.url === "/health") {
    sendJson(response, 200, { ok: true }, corsOrigin);
    return;
  }

  if (request.method === "POST" && request.url === "/demo-request") {
    try {
      await handleDemoRequest(request, response, corsOrigin);
    } catch (error) {
      console.error("Demo request failed", error);
      sendJson(response, 500, { ok: false, error: "The request could not be sent." }, corsOrigin);
    }
    return;
  }

  sendJson(response, 404, { ok: false, error: "Not found" }, corsOrigin);
});

server.listen(port, () => {
  console.log(`ETC HealthTech demo API listening on ${port}`);
});
