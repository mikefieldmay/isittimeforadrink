let countries = [];

const init = async () => {
  console.log(Intl.DateTimeFormat().resolvedOptions());

  countries = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,timezones,languages,flag"
  ).then((response) => response.json());

  const doTheThing = async () => {
    const currentDate = new Date();
    const hour = currentDate.getHours();

    // if (hour >= 17) {
    //   const textArea = document.getElementById("text-area");
    //   textArea.innerText = "It's 5 o'clock here! 🍻";
    //   return;
    // }

    console.log(countries);
    const utcOffset = currentDate.getTimezoneOffset();
    console.log(utcOffset);
    const utcZoneNeeded = utcOffset + (17 - hour);

    const utcCountries = countries.filter(
      (country) =>
        country.timezones.length === 1 &&
        country.timezones.includes(
          `UTC${utcZoneNeeded > 0 ? "+" : "-"}0${Math.sqrt(
            utcZoneNeeded * utcZoneNeeded
          )}:00`
        )
    );

    const country =
      utcCountries[Math.floor(Math.random() * utcCountries.length)];

    const textArea = document.getElementById("text-area");
    textArea.innerText = `Sure, it's 5 o'clock in ${country.name.common} ${country.flag}`;
  };

  doTheThing();
};

window.onload = init;
