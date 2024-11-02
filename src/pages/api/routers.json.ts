export async function GET() {
  return new Response(
    JSON.stringify({
      routers: [
        {
          Name: "TP-Link Зеленка",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__TPLink_Green_003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__TPLink_Green_004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__TPLink_Green_005",
          Channels:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__TPLink_Green_010",
          Settings: "0.1/tplinkwifi.net",
          BZ: "https://clever.ertelecom.ru/content/space/4/article/2312?text=Зеленый+Settings",
          Emulator: [
            "https://www.tp-link.com/resources/simulator/TL-WR1045ND(RU)_2.0/Index.htm",
            "https://www.tp-link.com/resources/simulator/TL-WR750N(UN)_V5.0/Index.htm",
          ],
        },
        {
          Name: "TP-Link Archer С5/С9/EC220",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__TPLink_Turquoise_003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__TPLink_Turquoise_004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__TPLink_Turquoise_005",
          Channels:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__TPLink_Turquoise_014",
          Settings: "0.1/tplinkwifi.net",
          BZ: "https://clever.ertelecom.ru/content/space/4/article/2312?text=TP-Link+Archer+С5,+С9,+EC220",
          Emulator:
            "https://emulator.tp-link.com/Archer_C5(RUS)v4_Router_Emulator/web/index.htm",
        },
        {
          Name: "TP-Link Archer C20/C2/A5/C50/AC750",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__TPLink_Turquoise_v2_C20_003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__TPLink_Turquoise_v2_C20_004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__TPLink_Turquoise_v2_C20_005",
          Channels:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__TPLink_Turquoise_v2_C20_010",
          Settings: "0.1/tplinkwifi.net",
          BZ: "https://clever.ertelecom.ru/content/space/4/article/2312?text=Archer+C20,+C2,+A5,+C50,+AC750",
          Emulator:
            "https://emulator.tp-link.com/Emulator_ArcherC20_RU_v4/index.htm",
        },
        {
          Name: "TP-Link Archer A6/C7/C60/A9",
          PPPoE:
            "http://kbn.ertelecom.ru/download/attachments/27963307/%D0%BC%D0%BE%D0%B9%20tp-link%20%D0%A0%D0%A0%D0%A0%D0%BE%D0%95.pdf",
          DHCP: "http://kbn.ertelecom.ru/download/attachments/27963307/DHCP%20opt%2082%20%D0%B1%D0%B8%D1%80%D1%8E%D0%B7%D0%BE%D0%B2%D0%B0%D1%8F%20%28v2%29.pdf",
          IPoE: "http://kbn.ertelecom.ru/download/attachments/27963307/Static%20ip%20%D0%B1%D0%B8%D1%80%D1%8E%D0%B7%D0%BE%D0%B2%D0%B0%D1%8F%20%28v2%29.pdf",
          Channels:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__TPLink_Turquoise_v2_C20_010",
          Settings: "0.1/tplinkwifi.net",
          BZ: "https://clever.ertelecom.ru/content/space/4/article/2312?text=TP-Link+Archer+A6,+C7,+C60,+A9",
          Emulator: "https://emulator.tp-link.com/c7v5_ru/index.html",
        },
        {
          Name: "TP-Link Archer C80",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__TPLink_Turquoise_C80_003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__TPLink_Turquoise_C80_004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__TPLink_Turquoise_C80_005",
          Channels:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__TPLink_Turquoise_C80_009",
          Settings: "0.1/tplinkwifi.net",
          BZ: "https://clever.ertelecom.ru/content/space/4/article/2312?text=Archer+C80",
          Emulator:
            "https://emulator.tp-link.com/c80-ru-router/index.html#networkMap",
        },
        {
          Name: "TP-Link Archer АХ20/C54",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__TPLink_Turquoise_AX20_003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__TPLink_Turquoise_AX20_004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__TPLink_Turquoise_AX20_004",
          Channels:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__TPLink_Turquoise_AX20_009",
          Settings: "0.1/tplinkwifi.net",
          BZ: "https://clever.ertelecom.ru/content/space/4/article/2312?text=Archer+АХ20+/+Archer+C54",
          Emulator:
            "https://emulator.tp-link.com/Archer_AX90v1_EU_simulator/index.html#tpLinkCloud",
        },
        {
          Name: "D-Link DIR-300NRU/DIR-615 Темная",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__DLink_Grey_003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__DLink_Grey_004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__DLink_Grey_005",
          Channels:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__DLink_Grey_009",
          Settings: "0.1",
          BZ: "https://clever.ertelecom.ru/content/space/4/folder/631/article/2275?text=DIR-300NRU+/+DIR-615",
          Emulator: "http://em.dlink.ru/emul/DIR-300AD_gray/",
        },
        {
          Name: "D-Link DIR-300/DIR-615 Желтая",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__DLink_Grey-orange_003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__DLink_Grey-orange_004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__DLink_Grey-orange_005",
          Channels:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__DLink_Grey-orange_009",
          Settings: "0.1",
          BZ: "https://clever.ertelecom.ru/content/space/4/folder/631/article/2275?text=D-Link+DIR-300+/+DIR-615",
          Emulator: "http://linserv.ru/dlink-DIR-615/",
        },
        {
          Name: "D-Link DIR-615 Белая",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__DLink_White_003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__DLink_White_004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__DLink_White_005",
          Channels:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__DLink_White_009",
          Settings: "0.1",
          BZ: "https://clever.ertelecom.ru/content/space/4/folder/631/article/2275?text=DIR-615",
          Emulator: "http://em.dlink.ru/emul/DIR-615KR1/#start/storInfo",
        },
        {
          Name: "D-Link DIR-300NRU/DIR-620",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__DLink_White-turquoise_003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__DLink_White-turquoise_004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__DLink_White-turquoise_005",
          Channels:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__DLink_White-turquoise_009",
          Settings: "0.1",
          BZ: "https://clever.ertelecom.ru/content/space/4/folder/631/article/2275?text=DIR-300NRU+/+DIR-620",
          Emulator: "Нет",
        },
        {
          Name: "D-Link DIR300NRU B5/DIR320NRU/DIR-620",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__DLink_White-blue_003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__DLink_White-blue_004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__DLink_White-blue_005",
          Channels:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__DLink_White-blue_009",
          Settings: "0.1",
          BZ: "https://clever.ertelecom.ru/content/space/4/folder/631/article/2275?text=DIR300NRU+B5+/+DIR320NRU+/+DIR-620",
          Emulator: "Нет",
        },
        {
          Name: "D-Link DIR-2150/DIR-825/DIR-X1530/DIR-842",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__DLink_V3_003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__DLink_V3_004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__DLink_V3_005",
          Channels:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__DLink_V3_009",
          Settings: "0.1",
          BZ: "https://clever.ertelecom.ru/content/space/4/folder/631/article/2275?text=DIR+2150+/+DIR+825+/+DIR-X1530",
          Emulator: "https://anweb.dlink.ru",
        },
        {
          Name: "Keenetic Lite II-III/Lite NDMS 2.0",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Keenetic_Dark-blue_003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Keenetic_Dark-blue_004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Keenetic_Dark-blue_005",
          Channels:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Keenetic_Dark-blue_009",
          Settings: "1.1/my.keenetic.net",
          BZ: "https://clever.ertelecom.ru/content/space/4/folder/631/article/2510?text=Keenetic+Lite+II-III+/+Lite+NDMS+2.0",
          Emulator: "http://routers.nvbs.ru/zyxel/NDMSv2_by_Anna/status.html",
        },
        {
          Name: "Keenetic Lite/ZyXel NBG334W EE",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Keenetic_Blue_003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Keenetic_Blue_004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Keenetic_Blue_005",
          Channels:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Keenetic_Blue_009",
          Settings: "1.1/my.keenetic.net",
          BZ: "https://clever.ertelecom.ru/content/space/4/folder/631/article/2510?text=Keenetic+Lite+/+ZyXel+NBG334W EE",
          Emulator:
            "https://itel.ua/emulations/zyxel_keenetic_giga/default.htm",
        },
        {
          Name: "Keenetic Ultra/Giga/Viva/Speedster",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Keenetic_Giga_003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Keenetic_Giga_004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Keenetic_Giga_005",
          Channels:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Keenetic_Giga_010",
          Settings: "1.1/my.keenetic.net",
          BZ: "https://clever.ertelecom.ru/content/space/4/folder/631/article/2510?text=Keenetic+Ultra/Giga/Viva/+Speedster",
          Emulator: "https://giga.demo.keenetic.pro/dashboard",
        },
        {
          Name: "Keenetic AlR/Zyxel VIVA/Zyxel CITY/Zyxel START",
          PPPoE:
            "http://kbn.ertelecom.ru/download/attachments/27963307/Zyxel%20%D0%BD%D0%BE%D0%B2%D0%B0%D1%8F%20%D0%BF%D1%80%D0%BE%D1%88%D0%B8%D0%B2%D0%BA%D0%B0.pdf",
          DHCP: "Нет",
          IPoE: "http://kbn.ertelecom.ru/download/attachments/27963307/Zyxel%20Air%20%D0%BF%D1%80%D0%BE%D1%88%D0%B8%D0%B2%D0%BA%D0%B0.pdf?version=1&modificationDate=1558793480808&api=v2",
          Channels: "Нет",
          Settings: "1.1/my.keenetic.net",
          BZ: "https://clever.ertelecom.ru/content/space/4/folder/631/article/2510?text=Zyxel+AlR+/+Zyxel+VIVA+/+Zyxel+CITY+/+Zyxel+START",
          Emulator: "https://giga.demo.keenetic.pro/dashboard",
        },
        {
          Name: "Xiaomi Белая",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Xiaomi_Mi-Router3_004",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Xiaomi_Mi-Router3_005",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Xiaomi_Mi-Router3_006",
          Channels:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Xiaomi_Mi-Router3_009",
          Settings: "31.1/miwifi.com/router.miwifi.com",
          BZ: "https://clever.ertelecom.ru/content/space/4/bookmark/34/article/2509?text=Xiaomi+Mi+Wi-Fi+Router+3",
          Emulator: "http://linserv.ru/Xiaomi/cgi-bin/luci/home",
        },
        {
          Name: "Xiaomi Черная",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Xiaomi_Mi-Router_004",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Xiaomi_Mi-Router_005",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Xiaomi_Mi-Router_006",
          Channels:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Xiaomi_Mi-Router_008",
          Settings: "31.1/miwifi.com/router.miwifi.com",
          BZ: "https://clever.ertelecom.ru/content/space/4/bookmark/34/article/2509?text=Xiaomi+Mi+Wi-Fi+Router",
          Emulator: "Нет",
        },
        {
          Name: "ASUS RT-AC66U/RT-N66U/RT-N65U Темная",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__ASUS_RT_6xxx_003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__ASUS_RT_6xxx_004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__ASUS_RT_6xxx_005",
          Channels:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__ASUS_RT_6xxx_011",
          Settings: "1.1",
          BZ: "https://clever.ertelecom.ru/content/space/4/bookmark/34/article/2520?text=ASUS+RT-AC66U+/+RT-N66U+/+RT-N65U",
          Emulator: "https://demoui.asus.com/",
        },
        {
          Name: "ASUS RT-N10/RT-G32/RT32G Голубая",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__ASUS_RT_3xxx_003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__ASUS_RT_3xxx_004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__ASUS_RT_3xxx_005",
          Channels:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__ASUS_RT_3xxx_011",
          Settings: "1.1",
          BZ: "https://clever.ertelecom.ru/content/space/4/bookmark/34/article/2520?text=ASUS+RT-N10+/+RT-G32+/+RT32G",
          Emulator: "https://routers.wtf/emul/ASUS1%20OFFLINE/index.html",
        },
        {
          Name: "ASUS WL-520GC Розовая",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__ASUS_WL_5xxx__003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__ASUS_WL_5xxx__004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__ASUS_WL_5xxx__004",
          Channels:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__ASUS_WL_5xxx__010",
          Settings: "1.1",
          BZ: "https://clever.ertelecom.ru/content/space/4/bookmark/34/article/2520?text=ASUS+WL-520GC",
          Emulator:
            "https://routers.wtf/emul/ASUS%20VIOLET%20OFFLINE/index-2.html",
        },
        {
          Name: "Rotek",
          PPPoE:
            "https://clever.ertelecom.ru/content/space/4/bookmark/34/article/8178?fileView=47495",
          DHCP: "https://clever.ertelecom.ru/content/space/4/bookmark/34/article/8178?fileView=47494",
          IPoE: "https://clever.ertelecom.ru/content/space/4/bookmark/34/article/8178?fileView=47492",
          Channels: "Нет",
          Settings: "0.1/user/connect5.html",
          BZ: "https://clever.ertelecom.ru/content/space/4/bookmark/34/article/8178?text=Rotek+RX22301/22200",
          Emulator: "Нет",
        },
        {
          Name: "Mercusys",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Mercusys_003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Mercusys_004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Mercusys_005",
          Channels:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Mercusys_007",
          Settings: "1.1/mwlogin.net",
          BZ: "https://clever.ertelecom.ru/content/space/4/folder/631/article/2076?text=Mercusys",
          Emulator: "https://www.mercusys.com/ru/support/simulator",
        },
        {
          Name: "Huawei HG231F",
          PPPoE:
            "https://clever.ertelecom.ru/content/space/4/folder/631/article/8179?fileView=47530",
          DHCP: "Нет",
          IPoE: "Нет",
          Channels: "Нет",
          Settings: "3.1/1.100",
          BZ: "https://clever.ertelecom.ru/content/space/4/folder/631/article/8179?text=Huawei+HG231F",
          Emulator: "Нет",
        },
        {
          Name: "Huawei WS880",
          PPPoE:
            "https://clever.ertelecom.ru/content/space/4/folder/631/article/8179?fileView=47539",
          DHCP: "Нет",
          IPoE: "Нет",
          Channels: "Нет",
          Settings: "3.1/1.100",
          BZ: "https://clever.ertelecom.ru/content/space/4/folder/631/article/8179?text=Huawei+ws880",
          Emulator: "Нет",
        },
        {
          Name: "Huawei HG532e",
          PPPoE:
            "https://clever.ertelecom.ru/content/space/4/folder/631/article/8179?fileView=47549",
          DHCP: "Нет",
          IPoE: "Нет",
          Channels: "Нет",
          Settings: "3.1/1.100",
          BZ: "https://clever.ertelecom.ru/content/space/4/folder/631/article/8179?text=Huawei+HG532e",
          Emulator: "Нет",
        },
        {
          Name: "Huawei AX(2,3)",
          PPPoE:
            "https://clever.ertelecom.ru/content/space/4/folder/631/article/8179?fileView=47560",
          DHCP: "https://clever.ertelecom.ru/content/space/4/folder/631/article/8179?fileView=47562",
          IPoE: "https://clever.ertelecom.ru/content/space/4/folder/631/article/8179?fileView=47561",
          Channels: "Нет",
          Settings: "3.1/1.100",
          BZ: "https://clever.ertelecom.ru/content/space/4/folder/631/article/8179?text=Huawei+AX3",
          Emulator: "Нет",
        },
        {
          Name: "SNR-CPE-W4N",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__SNR-CPE-W4N_003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__SNR-CPE-W4N_004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__SNR-CPE-W4N_005",
          Channels:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__SNR-CPE-W4N_009",
          Settings: "1.1",
          BZ: "https://clever.ertelecom.ru/content/space/4/folder/631/article/2515?text=SNR-CPE-W4N",
          Emulator: "http://linserv.ru/SNR-CPE-W4n/home.html",
        },
        {
          Name: "SNR-CPE-W4N ревизия M",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__SNR-CPE-W4N-revM_003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__SNR-CPE-W4N-revM_004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__SNR-CPE-W4N-revM_005",
          Channels:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__SNR-CPE-W4N-revM_009",
          Settings: "1.1",
          BZ: "https://clever.ertelecom.ru/content/space/4/folder/631/article/2515?text=SNR-CPE-W4N+ревизия+M",
          Emulator: "http://linserv.ru/SNR-CPE-W4n/home.html",
        },
        {
          Name: "Tenda new AC/F300",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Tenda_AC_003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Tenda_AC_004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Tenda_AC_005",
          Channels:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Tenda_AC_008",
          Settings: "0.1",
          BZ: "https://clever.ertelecom.ru/content/space/4/folder/631/article/2598?text=Tenda+New+AC+/+F300",
          Emulator: "http://simulator.tendacn.com/F300v2/",
        },
        {
          Name: "Tenda W303R/W309R/W316R",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Tenda_W303R_003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Tenda_W303R_004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Tenda_W303R_005",
          Channels:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Tenda_W303R_008",
          Settings: "0.1",
          BZ: "https://clever.ertelecom.ru/content/space/4/folder/631/article/2598?text=Tenda+W303R/W309R/W316R",
          Emulator: "Нет",
        },
        {
          Name: "Tenda W311R",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Tenda_W311R_003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Tenda_W311R_004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Tenda_W311R_005",
          Channels:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Tenda_W311R_008",
          Settings: "0.1",
          BZ: "https://clever.ertelecom.ru/content/space/4/folder/631/article/2598?text=Tenda+W311R",
          Emulator: "Нет",
        },
        {
          Name: "Tenda F300",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Tenda_F300_003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Tenda_F300_004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Tenda_F300_005",
          Channels:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Tenda_F300_008",
          Settings: "0.1",
          BZ: "https://clever.ertelecom.ru/content/space/4/folder/631/article/2598?text=Tenda+F300",
          Emulator: "http://simulator.tendacn.com/F300v2/",
        },
        {
          Name: "Tenda new",
          PPPoE:
            "http://kbn.ertelecom.ru/download/attachments/27963307/Tenda%20%28%D0%BE%D1%80%D0%B0%D0%BD%D0%B6%D0%B5%D0%B2%D0%B0%D1%8F%20%D0%BD%D0%BE%D0%B2%D0%B0%D1%8F%20%D0%BF%D1%80%D0%BE%D1%88%D0%B8%D0%B2%D0%BA%D0%B0%29%20PPPoE.pdf",
          DHCP: "http://kbn.ertelecom.ru/download/attachments/27963307/Tenda%20New%20%D0%BF%D1%80%D0%BE%D1%88%D0%B8%D0%B2%D0%BA%D0%B0.pdf",
          IPoE: "http://kbn.ertelecom.ru/download/attachments/27963307/Tenda%20%28%D0%BE%D1%80%D0%B0%D0%BD%D0%B6%D0%B5%D0%B2%D0%B0%D1%8F%20%D0%BD%D0%BE%D0%B2%D0%B0%D1%8F%20%D0%BF%D1%80%D0%BE%D1%88%D0%B8%D0%B2%D0%BA%D0%B0%29%20static.pdf",
          Channels: "Нет",
          Settings: "0.1",
          BZ: "https://clever.ertelecom.ru/content/space/4/folder/631/article/2598?text=Tenda+new",
          Emulator: "http://simulator.tendacn.com/F300v2/",
        },
        {
          Name: "Mikrotik",
          PPPoE:
            "http://kbn.ertelecom.ru/download/attachments/27963307/Nastroyka_PPPoE.pdf",
          DHCP: "http://kbn.ertelecom.ru/download/attachments/27963307/Nastroyka_DHCP.pdf?version=1&modificationDate=1597212858405",
          IPoE: "Нет",
          Channels: "Нет",
          Settings: "88.1",
          BZ: "https://clever.ertelecom.ru/content/space/4/article/2082?text=Mikrotik",
          Emulator: "https://demo.mt.lv/webfig/#System:Password.Change_Now",
        },
        {
          Name: "MikroTik hAP Lite",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Mikrotik_hAP-Lite-TC_003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Mikrotik_hAP-Lite-TC_004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Mikrotik_hAP-Lite-TC_005",
          Channels:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Mikrotik_011",
          Settings: "88.1",
          BZ: "https://clever.ertelecom.ru/content/space/4/article/2082?text=MikroTik+hAP+Lite+TC",
          Emulator: "https://demo.mt.lv/webfig/#System:Password.Change_Now",
        },
        {
          Name: "NetGear WNR3500L (серый)",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__NetGear_Grey_003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__NetGear_Grey_004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__NetGear_Grey_005",
          Channels:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__NetGear_Grey_009",
          Settings: "1.1",
          BZ: "https://clever.ertelecom.ru/content/space/4/article/2507?text=NetGear+WNR3500L+(серый)",
          Emulator: "http://routeremulator.com/netgear_genie/start.html",
        },
        {
          Name: "NetGear (синий)",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__NetGear_Blue_003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__NetGear_Blue_004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__NetGear_Blue_005",
          Channels:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__NetGear_Blue_009",
          Settings: "1.1",
          BZ: "https://clever.ertelecom.ru/content/space/4/article/2507?text=NetGear+(синий)",
          Emulator: "http://routeremulator.com/netgear_genie/start.html",
        },
        {
          Name: "Netgear EVG-1500 (Дом.ru)",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__NetgearDomru_003",
          DHCP: "Нет",
          IPoE: "Нет",
          Channels: "Нет",
          Settings: "1.1",
          BZ: "https://clever.ertelecom.ru/content/space/4/article/2507?text=Netgear+EVG-1500+(Дом.ru)",
          Emulator: "Нет",
        },
        {
          Name: "Sagemcom f@st 2804 v7",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Sagemcom_003",
          DHCP: "Нет",
          IPoE: "Нет",
          Channels:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Sagemcom_006",
          Settings: "1.1",
          BZ: "https://clever.ertelecom.ru/content/space/4/article/2513?text=Sagemcom+f@st+2804+v7",
          Emulator: "http://linserv.ru/FAST-2804v7/",
        },
        {
          Name: "Linksys Smart Wi-Fi",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Linksys_SmartWiFi_003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Linksys_SmartWiFi_004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Linksys_SmartWiFi_005",
          Channels:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Linksys_SmartWiFi_007",
          Settings: "1.1",
          BZ: "https://clever.ertelecom.ru/content/space/4/article/2080?text=Linksys+Smart+Wi-Fi",
          Emulator:
            "https://ui.linksys.com/SmartWi-FiFamilyRouters/WRT1200AC/1.0.99.166464/",
        },
        {
          Name: "Linksys e1200",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Linksys_E1200_003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Linksys_E1200_004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Linksys_E1200_005",
          Channels:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Linksys_E1200_008",
          Settings: "1.1",
          BZ: "https://clever.ertelecom.ru/content/space/4/article/2080?text=Linksys+e1200",
          Emulator: "https://ui.linksys.com/ExpertFamily/E1200/2.0.04",
        },
        {
          Name: "Netis Белый",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Netis_White_003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Netis_White_004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Netis_White_005",
          Channels:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Netis_White_009",
          Settings: "1.1/netis.cc",
          BZ: "https://clever.ertelecom.ru/content/space/4/article/2078?text=Netis+(Белый+Settings)",
          Emulator:
            "https://www.netisru.com/Uploads/Support/Emulators/WF2780_EN/index.htm",
        },
        {
          Name: "Netis Синий",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Netis_Blue_003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Netis_Blue_004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Netis_Blue_005",
          Channels:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Netis_Blue_008",
          Settings: "1.1/netis.cc",
          BZ: "https://clever.ertelecom.ru/content/space/4/article/2078?text=Netis+(Синий+Settings)",
          Emulator: "http://linserv.ru/Netis-WF2501/",
        },
        {
          Name: "Apple AirPort",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router_AirPort_003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router_AirPort_004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router_AirPort_005",
          Channels:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router_AirPort_007",
          Settings: "Нет",
          BZ: "https://clever.ertelecom.ru/content/space/4/article/2069?text=Настройка+роутеров",
          Emulator: "Нет",
        },
        {
          Name: "Honor",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Honor_003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Honor_004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Honor_005",
          Channels:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Honor_007",
          Settings: "3.1",
          BZ: "https://clever.ertelecom.ru/content/space/4/article/2075?text=Настройка+роутеров",
          Emulator: "Нет",
        },
        {
          Name: "Totolink",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Totolink_003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Totolink_004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Totolink_005",
          Channels:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Totolink_008",
          Settings: "1.1",
          BZ: "https://clever.ertelecom.ru/content/space/4/article/2084?text=Настройка+роутеров",
          Emulator:
            "https://www.totolink.net/data/popwin/web/A5004NS.9.38/index.htm",
        },
        {
          Name: "TRENDnet TEW-652BRP",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__TRENDnet_TEW-652BRP_003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__TRENDnet_TEW-652BRP_004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__TRENDnet_TEW-652BRP_005",
          Channels:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__TRENDnet_TEW-652BRP_007",
          Settings: "10.1",
          BZ: "https://clever.ertelecom.ru/content/space/4/article/2081?text=TRENDnet+TEW-652BRP",
          Emulator:
            "https://www.trendnet.com/emulators/TEW-652BRP_V3.2R/wireless_basic.htm",
        },
        {
          Name: "TRENDnet New (TEW-827DRU)",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__TRENDnet_TEW-827DRU_003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__TRENDnet_TEW-827DRU_004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__TRENDnet_TEW-827DRU_004",
          Channels:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__TRENDnet_TEW-827DRU_007",
          Settings: "10.1",
          BZ: "https://clever.ertelecom.ru/content/space/4/article/2081?text=TRENDnet+New+(TEW-827DRU)",
          Emulator:
            "https://www.trendnet.com/emulators/TEW-827DRU_v2.0R/adm_status.html",
        },
        {
          Name: "Upvel UR-354AN4G",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Upvel_UR-354AN4G_003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Upvel_UR-354AN4G_004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Upvel_UR-354AN4G_005",
          Channels:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Upvel_UR-354AN4G_007",
          Settings: "10.1",
          BZ: "https://clever.ertelecom.ru/content/space/4/article/2521?text=Upvel+UR-354AN4G",
          Emulator: "http://linserv.ru/Upvel-UR-314AWN/",
        },
        {
          Name: "Upvel UR-315BN",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Upvel_UR-315BN_003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Upvel_UR-315BN_004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Upvel_UR-315BN_005",
          Channels:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Upvel_UR-315BN_008",
          Settings: "10.1",
          BZ: "https://clever.ertelecom.ru/content/space/4/article/2521?text=Upvel+UR-315BN",
          Emulator: "Нет",
        },
        {
          Name: "Upvel UR-325BN/UR-322N4G",
          PPPoE:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Upvel_UR-325BN_003",
          DHCP: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Upvel_UR-325BN_004",
          IPoE: "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Upvel_UR-325BN_005",
          Channels:
            "https://dom.ru/service/knowledgebase/instruktsii-po-oborudovaniyu/router__Upvel_UR-325BN_008",
          Settings: "10.1",
          BZ: "https://clever.ertelecom.ru/content/space/4/article/2521?text=Upvel+UR-325BN+/+UR-322N4G",
          Emulator: "http://linserv.ru/Upvel-UR-447N4G/",
        },
        {
          Name: "UPVEl UR-312N4G",
          PPPoE:
            "http://kbn.ertelecom.ru/download/attachments/27963307/Upvel%20UR-312N4G%20%D0%BC%D0%B0%D0%BD%D1%83%D0%B0%D0%BB%20%D0%BF%D1%80%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9.pdf",
          DHCP: "Нет",
          IPoE: "http://kbn.ertelecom.ru/download/attachments/27132203/Upvel%20%D1%87%D0%B5%D1%80%D0%BD%D1%8B%D0%B9.pdf",
          Channels: "Нет",
          Settings: "10.1",
          BZ: "https://clever.ertelecom.ru/content/space/4/article/2521?text=UPVEl+UR-312N4G",
          Emulator: "http://linserv.ru/Upvel-UR825AC/",
        },
        {
          Name: "Tenda Nova MW3, MW6",
          PPPoE:
            "http://kbn.ertelecom.ru/download/attachments/27963307/%D0%BC%D1%8D%D1%88%20%D1%80%D1%80%D1%80%D0%BE%D0%B5.pdf",
          DHCP: "http://kbn.ertelecom.ru/download/attachments/27963307/mash%20%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0.pdf",
          IPoE: "http://kbn.ertelecom.ru/download/attachments/27963307/static%20mesh.pdf",
          Channels: "Нет",
          Settings: "0.1",
          BZ: "https://clever.ertelecom.ru/content/space/4/article/2072?text=Tenda+Nova+MW3,+MW6",
          Emulator: "Нет",
        },
        {
          Name: "Tp-Link DECO M4",
          PPPoE:
            "http://kbn.ertelecom.ru/download/attachments/27963307/meshup1%20%281%29.pdf",
          DHCP: "http://kbn.ertelecom.ru/download/attachments/27963307/mesh%20%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0%20%D1%82%D0%bf%20%D0%BB%D0%B8%D0%BD%D0%BA.pdf",
          IPoE: "http://kbn.ertelecom.ru/download/attachments/27963307/meshup1%20%281%29.pdf",
          Channels: "Нет",
          Settings: "68.1",
          BZ: "https://clever.ertelecom.ru/content/space/4/article/2072?text=Tp-Link+DECO+M4",
          Emulator: "Нет",
        },
        {
          Name: "Nokia Wifi Beacon",
          PPPoE:
            "http://kbn.ertelecom.ru/download/attachments/27963307/%D0%9D%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B9%D0%BA%D0%B0_Nokia_Beacon_%D1%87%D0%B5%D1%80%D0%B5%D0%B7_web_%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D1%84%D0%B5%D0%B9%D1%81.pdf",
          DHCP: "http://kbn.ertelecom.ru/download/attachments/27963307/%D0%9D%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B9%D0%BA%D0%B0_Nokia_Beacon_%D1%87%D0%B5%D1%80%D0%B5%D0%B7_web_%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D1%84%D0%B5%D0%B9%D1%81.pdf",
          IPoE: "Нет",
          Channels: "Нет",
          Settings: "18.1",
          BZ: "https://clever.ertelecom.ru/content/space/4/article/2072?text=Nokia+Wifi+Beacon",
          Emulator: "Нет",
        },
      ],
    }), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET",
          "Access-Control-Allow-Headers": "Content-Type, Authorization"
        }
      }
  );
}
