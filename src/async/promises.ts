// Part 10 — Promise + async/await


async function getMessage(): Promise<string> {
  return "Hello TypeScript";
}

async function main() {
  const message = await getMessage();

  console.log(message);
}

main();
