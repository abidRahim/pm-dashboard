function generateSeed() {
  return window.crypto.getRandomValues(new Uint8Array(256));
}

function validateCharacter(char){
  const specials = "!@#$%^&*()_+{}:\"<>?|[];',./`~".split("");
  const lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const numbers = "0123456789".split("");

  return [
    ...specials,
    ...lowercase,
    ...uppercase,
    ...numbers,
  ].includes(char);
}

export default function generateId(length = 32) {
  let secret = "";
  let randomSeed;

  while (secret.length < length) {
    randomSeed = generateSeed();
    for (let ii = 0; ii < randomSeed.length; ii++) {
      const char = String.fromCharCode(randomSeed[ii]);

      // Append the character to secret if it is valid
      if (validateCharacter(char)) {
        secret += char;
      }

      if (secret.length === length) {
        break;
      }
    }
  }

  return secret;
}
