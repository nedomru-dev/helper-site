export async function GET({ params, request }) {
  return new Response(
    JSON.stringify({
      mna: [
        {
          name: "Interzet",
          authorization: "IPoE Static",
          connection: "Ethernet",
          link: "https://clever.ertelecom.ru/content/space/4/folder/582/article/3289",
        },
        {
          name: "Тура-Telecom",
          authorization: "PPPoE, DHCP opt82",
          connection: "Ethernet",
          link: "https://clever.ertelecom.ru/content/space/4/folder/582/article/3280",
        },
        {
          name: "Ярославль Телесеть (ЯТС)",
          authorization: "PPPoE, DHCP opt82",
          connection: "Ethernet",
          link: "https://clever.ertelecom.ru/content/space/4/folder/582/article/3136",
        },
        {
          name: "Иркнет",
          authorization: "PPPoE",
          connection: "ADSL, GPON, FTTH",
          link: "https://clever.ertelecom.ru/content/space/4/folder/582/article/3192",
        },
        {
          name: "Контакт (Тула)",
          authorization: "PPPoE",
          connection: "ADSL",
          link: "https://clever.ertelecom.ru/content/space/4/folder/582/article/3282",
        },
        {
          name: "Коламбия Телеком",
          authorization: "PPPoE, DHCP opt82",
          connection: "Ethernet, ADSL",
          link: "https://clever.ertelecom.ru/content/space/4/folder/582/article/2761",
        },
        {
          name: "Телемир (Липецк)",
          authorization: "PPPoE, DHCP opt82",
          connection: "Ethernet",
          link: "https://clever.ertelecom.ru/content/space/4/article/3191",
        },
        {
          name: "Акадо (СПБ)",
          authorization: "DHCP MAC+VLAN",
          connection: "Ethernet",
          link: "https://clever.ertelecom.ru/content/space/4/folder/582/article/3291",
        },
        {
          name: "БКС (Брянск)",
          authorization: "DHCP MAC+VLAN, DHCP opt82",
          connection: "Ethernet, PON",
          link: "https://clever.ertelecom.ru/content/space/4/folder/582/article/2760",
        },
        {
          name: "Инфоцентр (Сосновый бор)",
          authorization: "IPoE Static",
          connection: "Ethernet",
          link: "https://clever.ertelecom.ru/content/space/4/folder/582/article/3285",
        },
        {
          name: "Конвекс/ТКС (ЕКБ)",
          authorization: "IPoE Static, PPTP (общежития)",
          connection: "Ethernet",
          link: "https://clever.ertelecom.ru/content/space/4/folder/582/article/2769",
        },
        {
          name: "Дельта-Телеком",
          authorization: "PPPoE",
          connection: "ADSL",
          link: "https://clever.ertelecom.ru/content/space/4/folder/582/article/3106",
        },
        {
          name: "Мегаполис-Телеком",
          authorization: "PPPoE",
          connection: "PON",
          link: "https://clever.ertelecom.ru/content/space/4/article/3189",
        },
        {
          name: "СибТелеКом (СТК)",
          authorization: "PPPoE, DHCP opt82",
          connection: "Ethernet, ADSL",
          link: "https://clever.ertelecom.ru/content/space/4/folder/582/article/3121",
        },
        {
          name: "Westcall / N-Link (Рязань)",
          authorization: "IPoE DHCP, PPPoE",
          connection: "Ethernet, ADSL, PON",
          link: "https://clever.ertelecom.ru/content/space/4/folder/582/article/3288",
        },
        {
          name: "Акадо (ЕКБ)",
          authorization: "L2TP",
          connection: "Ethernet",
          link: "https://clever.ertelecom.ru/content/space/4/folder/582/article/2768",
        },
        {
          name: "Сатурн (Пермь)",
          authorization: "PPPoE",
          connection: "FTTH",
          link: "https://clever.ertelecom.ru/content/space/4/folder/582/article/6528",
        },
        {
          name: "Westcall (СПб)",
          authorization: "DHCP MAC+VLAN",
          connection: "Ethernet",
          link: "https://clever.ertelecom.ru/content/space/4/folder/582/article/3286",
        },
        {
          name: "Кредолинк (СПб)",
          authorization: "DHCP MAC+VLAN",
          connection: "Ethernet",
          link: "https://clever.ertelecom.ru/content/space/4/folder/582/article/3283",
        },
        {
          name: "MSNet (СПБ)",
          authorization: "DHCP MAC+VLAN",
          connection: "Ethernet",
          link: "https://clever.ertelecom.ru/content/space/4/folder/582/article/3287",
        },
        {
          name: "RiNet",
          authorization: "DHCP MAC+VLAN",
          connection: "Ethernet",
          link: "https://clever.ertelecom.ru/content/space/4/folder/582/article/3246",
        },
        {
          name: "Стрела (Димитровград)",
          authorization: "DHCP opt82",
          connection: "Ethernet",
          link: "https://clever.ertelecom.ru/content/space/4/folder/582/article/3172",
        },
        {
          name: "С-Телеком МСК (Самолет)",
          authorization: "PPPoE, DHCP opt82",
          connection: "Ethernet",
          link: "https://clever.ertelecom.ru/content/space/4/folder/582/article/3238",
        },
        {
          name: "Дианэт (Барнаул и область)",
          authorization: "PPPoE, L2TP",
          connection: "Ethernet",
          link: "https://clever.ertelecom.ru/content/space/4/folder/582/article/2646",
        },
        {
          name: "НТС (Томск)",
          authorization: "IPoE DHCP",
          connection: "Ethernet",
          link: "https://clever.ertelecom.ru/content/space/4/article/3648",
        },
      ],
    })
  );
}
