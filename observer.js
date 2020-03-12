const faders = document.querySelectorAll('.statistics-section-content');

const statisticsSection = document.querySelector(".statistics-section");

const appearOptions = {
    threshold: 1,
    rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            if (entry.target.id.indexOf("appear")){
                console.log("found fadder off screen");
                entry.target.classList.remove("appear");
            }
        } else {
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
            const faders = document.querySelectorAll('.statistics-section-content');
        }});
    }, appearOptions);

    const StatisticsOvbserver = new IntersectionObserver(function(
        entries,
        StatisticsOvbserver
      ) {
        entries.forEach(entry => {
          if (!entry.isIntersecting) {
            faders.forEach(fader => {  
                if (fader.id.indexOf("appear")){
                    fader.classList.remove("appear");
                }
                console.log('found fader');
                appearOnScroll.observe(fader);
            });
          } else {
            return;
          }
        });
      },);

      const StatisticSectionObserver = new IntersectionObserver(function(
        entries,
        StatisticsOvbserver
      ) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            faders.forEach(fader => {  
                if (fader.id.indexOf("appear")){
                    fader.classList.remove("appear");
                }
                console.log('found fader');
                appearOnScroll.observe(fader);
            });
          } else {
            return;
          }
        });
      },);
      
      StatisticsOvbserver.observe(statisticsSection);

    faders.forEach(fader => {  
        console.log('found fader');
        StatisticSectionObserver.observe(fader);
    });

