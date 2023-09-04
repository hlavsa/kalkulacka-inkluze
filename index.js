//const population = 10850000;

const rates = {
  visionDisability: 1.46,
  mentalHealthImpairment: 2,
  dexterityImpairment: ,
  anyDisability: ,
  hearingLoss: 0.068,
  lowLiteracy: 0.05,
  anxietyDisorder: ,
  learningImpairment: 3,
  memoryImpairment: ,
  dyslexia: 5.1,
  notFirstLanguage: 14.0,
  colourVisionDeficiencyM: ,
  adhd0To19: ,
  adhd20Plus: ,
  bipolarDisorder: ,
  autism: 1.5,
  colourVisionDeficiencyF: ,
  signLanguageUsers: 0.068,
};

const names = {
  visionDisability: "Zrakové postižení",
  mentalHealthImpairment: "Mentální postižení",
  dexterityImpairment: "Tělesné postižení",
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
  autism: "Autismus",
  colourVisionDeficiencyF: "Porucha barevného vidění (žena)",
  signLanguageUsers: "Mluvčí českého znakového jazyka",
};

const sources = {
  visionDisability:
    "https://poslepu.cz/kolik-je-v-ceske-republice-zrakove-postizenych-lidi/",
  mentalHealthImpairment: "htt",
  dexterityImpairment: "htt",
  anyDisability: "htt",
  hearingLoss:
    "https://www.cun.cz/cs/blog/2017/05/17/statistiky-poctu-osob-se-sluchovym-postizenim/",
  lowLiteracy: "htt",
  anxietyDisorder: "htt",
  learningImpairment: "Bez zdroje",
  memoryImpairment: "htt",
  dyslexia:
    "https://karolinum.cz/data/clanek/2247/PPP_3_4_2015%20kejrova%2075-87.pdf",
  notFirstLanguage: "https://www.scitani.cz/matersky-jazyk",
  colourVisionDeficiencyM: "htt",
  adhd0To19: "htt",
  adhd20Plus: "htt",
  autism: "https://www.nautis.cz/autismus",
  colourVisionDeficiencyF: "htt",
  signLanguageUsers:
    "https://www.cun.cz/cs/blog/2017/05/17/statistiky-poctu-osob-se-sluchovym-postizenim/",
};

// DOM elements
const form = document.getElementById("calculator");
const results = document.getElementById("results");
const population = parseInt(form.population.value);

// Handle form submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get input value
  const population = parseInt(form.population.value);

  // Create searched number message
  let message = `
    Výsledky pro ${population} osob.

    Tyto výsledky využívají údaje z několika zdrojů a lidé mohou spadat do jednoho nebo více kritérií, proto se čísla nebudou sčítat do ${population}.
  `;
  // Output message
  results.innerHTML = `
    <div class="text-m text-gray-900">
      ${message}  
    </div>
  `;

  // Output string
  // Create results output
  let output = `
  <h2 class="mt-4 text-2xl font-bold border-t-2 pt-4 pb-8">Zdravotní postižení, poruchy a stavy</h2>
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

  // Display message above table 
  results.innerHTML += output;
});
