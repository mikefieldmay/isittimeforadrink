let countries = [];

const init = async () => {
  console.log("innnit bruv");
  console.log("GREAT");
  console.log("Dark sugars");

  console.log(Intl.DateTimeFormat().resolvedOptions());

  countries = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,timezones,languages,flag"
  ).then((response) => response.json());

  console.log(countries);

  const doTheThing = async () => {
    console.log("do the thing");
    const currentDate = new Date();
    const hour = currentDate.getHours();

    // IF it's 5 o'clock here, return

    // if (hour >= 17) {
    //   console.log("it's 5 o'clock here baby");
    //   return;
    // }

    // if it was 14 here and the utc offset was 0 we'd need a utc+3 timezone

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
    textArea.innerText = `It's 5 o'clock in ${country.name.common}\n ${country.flag}`;

    console.log(country.name.common);

    // const translatorCapabilities = await Translator.availability({
    //   sourceLanguage: "es",
    //   targetLanguage: "fr",
    // });

    // const translator = await Translator.create({
    //   sourceLanguage: "es",
    //   targetLanguage: "fr",
    //   monitor(m) {
    //     m.addEventListener("downloadprogress", (e) => {
    //       console.log(`Downloaded ${e.loaded * 100}%`);
    //     });
    //   },
    // });

    // console.log(translatorCapabilities);

    console.log({ country });

    console.log(utcCountries);

    console.log(utcZoneNeeded);

    // navigator.geolocation.getCurrentPosition(
    //   (pos) => {
    //     const { latitude, longitude } = pos.coords;
    //     console.log(latitude, longitude);
    //     fetch(
    //       `https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&apiKey=e13c6226e0134aa5b79eddcef68e9869`
    //     )
    //       .then((response) => response.json())
    //       .then((data) => {
    //         console.log(data);
    //         const currentCountry = data.features[0].properties.country;
    //         console.log(currentCountry);
    //         const countryFromApi = countries.find(
    //           (country) => country.name.common === currentCountry
    //         );
    //         console.log(countryFromApi);
    //       });
    //   },
    //   (err) => {
    //     console.error("User denied or unavailable:", err);
    //   }
    // );
  };

  doTheThing();
  // const userButton = document.getElementById("do-the-thing");
  // console.log(userButton);
  // userButton.addEventListener("click", doTheThing);
};

window.onload = init;
