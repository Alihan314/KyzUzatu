export type Language = "kz" | "ru";

export interface SiteConfig {
  weddingDate: string; // ISO format: "2025-12-30T18:00:00"
  location: {
    name: string;
    addressKz: string;
    addressRu: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  music: {
    path: string;
    startTime: number;
  };
  rsvp: {
    mode: "api";
  };
  texts: {
    kz: {
      hero: {
        name: string;
        title: string;
      };
      music: {
        clickToPlay: string;
      };
      invitation: {
        greeting: string;
        greetingPart1: string;
        greetingPart2: string;
        text: string;
      };
      phrase: {
        text: string;
      };
      countdown: {
        days: string;
        hours: string;
        minutes: string;
        seconds: string;
        title: string;
      };
      calendar: {
        months: string[];
      };
      location: {
        title: string;
      };
      hosts: {
        title: string;
        names: string;
      };
      rsvp: {
        title: string;
        nameLabel: string;
        phoneLabel: string;
        option1: string;
        option2: string;
        option3: string;
        submitButton: string;
        success: string;
      };
    };
    ru: {
      hero: {
        name: string;
        title: string;
      };
      music: {
        clickToPlay: string;
      };
      invitation: {
        greeting: string;
        greetingPart1: string;
        greetingPart2: string;
        text: string;
      };
      phrase: {
        text: string;
      };
      countdown: {
        days: string;
        hours: string;
        minutes: string;
        seconds: string;
        title: string;
      };
      calendar: {
        months: string[];
      };
      location: {
        title: string;
      };
      hosts: {
        title: string;
        names: string;
      };
      rsvp: {
        title: string;
        nameLabel: string;
        phoneLabel: string;
        option1: string;
        option2: string;
        option3: string;
        submitButton: string;
        success: string;
      };
    };
  };
}

export const siteConfig: SiteConfig = {
  weddingDate: "2025-12-30T18:00:00",
  location: {
    name: "Dulat Банкетный ресторан",
    addressKz: "Ақтөбе қаласы,\nЕдіге батыр даңғылы, 26,\nШестихатка көшесі, 105/2",
    addressRu: "г. Актобе,\nПроспект Едиге батыра, 26,\nулица Шестихатка, 105/2",
    coordinates: {
      lat: 50.2833,
      lng: 57.1667,
    },
  },
  music: {
    path: "/music.mp3",
    startTime: 10,
  },
  rsvp: {
    mode: "api",
  },
  texts: {
    kz: {
      hero: {
        name: "Аяулым",
        title: "Қыз ұзату",
      },
      music: {
        clickToPlay: "Музыканы қосу үшін үстін басыңыз",
      },
      invitation: {
        greeting: "Құрметті қонақтар!",
        greetingPart1: "Құрметті",
        greetingPart2: "қонақтар!",
        text: "Сіздерді аяулы қызымыз\nАяулымның\nАта-ананың аялы алақанынан Ақ босағасына шығарып салуға арналған салтанатты дастарханымыздың қадірлі қонағы болуға шақырамыз!",
      },
      phrase: {
        text: "Келіңіздер, тойымыздың\nқадірлі қонағы болыңыздар!",
      },
      countdown: {
        days: "КҮН",
        hours: "САҒАТ",
        minutes: "МИНУТ",
        seconds: "СЕКУНД",
        title: "Ұзату тойына дейін.",
      },
      calendar: {
        months: [
          "Қаңтар",
          "Ақпан",
          "Наурыз",
          "Сәуір",
          "Мамыр",
          "Маусым",
          "Шілде",
          "Тамыз",
          "Қыркүйек",
          "Қазан",
          "Қараша",
          "Желтоқсан",
        ],
      },
      location: {
        title: "Мекен-жайы",
      },
      hosts: {
        title: "Той иесі:",
        names: "Ғалым - Назира",
      },
      rsvp: {
        title: "Тойға қатысуыңызды растауыңызды сұраймыз!",
        nameLabel: "Есіміңіз",
        phoneLabel: "Телефон нөміріңіз",
        option1: "Келемін",
        option2: "Жұбыммен келемін",
        option3: "Өкінішке орай, қатыса алмаймын",
        submitButton: "Жіберу",
        success: "Рахмет! Сіздің жауабыңыз жіберілді.",
      },
    },
    ru: {
      hero: {
        name: "Аяулым",
        title: "Проводы невесты",
      },
      music: {
        clickToPlay: "Нажмите, чтобы включить музыку",
      },
      invitation: {
        greeting: "Дорогие гости!",
        greetingPart1: "Дорогие",
        greetingPart2: "гости!",
        text: "Приглашаем вас на торжественный дастархан, посвященный проводам нашей дорогой дочери\nАяулым\nиз родительского дома в новую семью!",
      },
      phrase: {
        text: "Приходите и станьте\nпочётными гостями нашей свадьбы!",
      },
      countdown: {
        days: "ДЕНЬ",
        hours: "ЧАС",
        minutes: "МИНУТА",
        seconds: "СЕКУНДА",
        title: "До свадьбы Узату.",
      },
      calendar: {
        months: [
          "Январь",
          "Февраль",
          "Март",
          "Апрель",
          "Май",
          "Июнь",
          "Июль",
          "Август",
          "Сентябрь",
          "Октябрь",
          "Ноябрь",
          "Декабрь",
        ],
      },
      location: {
        title: "Место проведения",
      },
      hosts: {
        title: "Организаторы:",
        names: "Ғалым - Назира",
      },
      rsvp: {
        title: "Просим подтвердить участие",
        nameLabel: "Ваше имя",
        phoneLabel: "Ваш номер телефона",
        option1: "Приду",
        option2: "Приду с парой",
        option3: "К сожалению, не смогу",
        submitButton: "Отправить",
        success: "Спасибо! Ваш ответ отправлен.",
      },
    },
  },
};

