const rates = {
  visionDisability: 2.3,
  mentalHealthImpairment: 18.9,
  dexterityImpairment: 6.8,
  anyDisability: 27.2,
  hearingLoss: 3.6,
  lowLiteracy: 14.6,
  anxietyDisorder: 19.1,
  learningImpairment: 8.0,
  memoryImpairment: 10.4,
  dyslexia: 8.0,
  notFirstLanguage: 21.5,
  colourVisionDeficiencyM: 8.0,
  adhd0To19: 9.4,
  adhd20Plus: 4.4,
  bipolarDisorder: 4.3,
  autism: 1.5,
  colourVisionDeficiencyF: 0.5,
  signLanguageUsers: 0.4,
};

const names = {
  visionDisability: "Zrakové postižení",
  mentalHealthImpairment: "Poškození duševního zdraví",
  dexterityImpairment: "Porucha obratnosti",
  anyDisability: "Jakékoli zdravotní postižení",
  hearingLoss: "Ztráta sluchu",
  lowLiteracy: "Nízká gramotnost",
  anxietyDisorder: "Úzkostná porucha",
  learningImpairment: "Porucha učení",
  memoryImpairment: "Porucha paměti",
  dyslexia: "Dyslexie",
  notFirstLanguage: "Čeština není prvním jazykem",
  colourVisionDeficiencyM: "Nedostatek barevného vidění (muž)",
  adhd0To19: "ADHD (věk 0-19)",
  adhd20Plus: "ADHD (věk 20+)",
  bipolarDisorder: "Bipolání porucha",
  autism: "Autismus",
  colourVisionDeficiencyF: "Porucha barevného vidění (žena)",
  signLanguageUsers: "Uživatelé České znakové řeči",
};

const sources = {
  visionDisability: "https://example.com/vision-stats",
  //...
};

// DOM elements
const form = document.getElementById("calculator");
const results = document.getElementById("results");

// Handle form submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get input value
  const population = parseInt(form.population.value);

  // Output string
  // Create results output
  let output = `
  <h2 class="mt-4 text-lg">Zdravotní postižení, postižení a stavy</h2>
  <table class="border-collapse table-auto w-full text-sm text-left text-gray-500 ">
    <thead class="text-xs text-gray-700 uppercase bg-gray-50">
      <tr>
        <th scope="col" class="px-6 py-3">Opatření</th>
        <th scope="col" class="px-6 py-3">Odhadovaný počet</th>
        <th scope="col" class="px-6 py-3">Zdroj</th>
      </tr>
    </thead>
`;

  // Calculate estimates
  for (let disability in rates) {
    const count = population * (rates[disability] / 100);

    // Add table row for each disability
    output += `
    <tbody>
      <tr class="bg-white border-b">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">${
          names[disability]
        }</th>  
        <td class=" px-6 py-4">${Math.round(count)}</td>
        <td class=" px-6 py-4"><a class="font-medium text-blue-600  hover:underline" href="${
          sources[disability]
        }">Přejít na zdroj</a></td>

        </tr>
      </tbody>
    `;
  }

  // Close table
  output += `</table>`;

  // Update results div
  results.innerHTML = output;
});
