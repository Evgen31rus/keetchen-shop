let backend = 

    {
        menu: ['Цены', 'Акция' , 'Материалы', 'Как заказать', 'Наши работы', 'Отзывы' , 'Контакты'], 
        products: [
{
    productID: 1,
    productPhoto: 'https://s3-alpha-sig.figma.com/img/5134/cc93/7ee289f4a6dcf949b4e53d552e6c0324?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CknA1~ZfP0cEEeM8cfvoPpWb04susrVQ~U-0AHSWpekoxG6CwjBXe9bZM-mpPvwtTGdQu662HZjh5Rqek1jGCi9DTpaDB8BbwEGH-AfpIcfiCVw8piWeVAl68hDy9SrNbhN9XkB8Eqs~AvNKuyUJmvVPX81ZGoV870KOw~XupAVdNb~r9P0fQ51H0FzcYnIEhlbw2-jgEwv~KgshkkbPMm1og1G2IkG58s5TLPLnM3qLifDtFNve4Ey46HB-uVlb38dtzkoln0xSUrH57nEc2VQxyll457o6PKU~ueObCl0dtSQFZGhb1Zemv~M1mIYcwiSfzV6HcOF6~0QHxHKZZQ__',
    facadeMaterial: 'пластик',
    furniture: 'Fennel',
    tableTop: 'Постформинг',
    price: 26850,
    priceSale: 19990,
},
{
    productID: 2,
    productPhoto: 'https://s3-alpha-sig.figma.com/img/1e9f/7128/3f9797212822365ba79053b476e491e4?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=knt9LDhT6v~dg4zba4J7qHsdTCa-6YgWrmXE-FMDDG6XBJa07JTYV93F8oDE7b5kKgKWnmP5GZ1t1vRNfDUhono7ULQiiKJq-DDg8eQSO3lflp8naVTVfkrUAmx8E-jljsW2rd8W38tkXE35lHnDlRLj0U3CZ34VnAR6vawF7C07rbcvHUaCHEJ1bhn8YHCf7urG6hN9y-PbqLoQ9Z3v9ZUASy5bNsel~AIIttCwhrnryHXy-WmQOi0Zd~i1AlWt5y9Mv799MN-8701jAnAUCKhxEo5~i3C5gGho1yU6WnYmlBgEpvARWi4Kbw9xNuDn36fgAGVdDWbcPkRJwRpkXw__',
    facadeMaterial: 'Крашенный МДФ и шпонированный МДФ',
    furniture: 'Braun',
    tableTop: 'Компакт-плита',
    price: 28620,
    priceSale: 21200,
},
{
    productID: 3,
    productPhoto: 'https://s3-alpha-sig.figma.com/img/d011/b2ba/eb98478bdae989bd56e986a0f29fbf73?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KDgUbr-6bPr-3XXwVMIv8nfYCVbkL6LW9pj4Wrldn3z5zbWiXi67mg-L8fgJ0cPybrjE~qX-r~ajmh9y~qmYi2KGOyREtIYDkNXnPIzzxdlPZ7koKHQ2oae1MgXPT1ModGS11RTxPUaMhdkZQvzCHq7ogwwPshzfLXG8a89rDIQowy4y1FKiZSkfPN81X7uFRlf9imORevANnIo0CgkkWeFHKIkIOEzBGPCLSX1IJO5XsxXlhC~d566ZJXMuNW3WpgKnYKZRrAHcYJWuONJV7cZ-95OD4wavdDa0~qIY5muNXW7fxn6pklbJlk-kWjslmT~xxPFQkKyiOXiIcK~Qfw__',
    facadeMaterial: 'Пластик и шпонированный МДФ',
    furniture: 'Blum',
    tableTop: 'Постформинг',
    price: 32900,
    priceSale: 24400,
},
{
    productID: 4,
    productPhoto: 'https://s3-alpha-sig.figma.com/img/2b4b/601c/9ea4333f713573978725cb183be6df88?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ex6CAqUhl60hoTIVnk50ZYPPxCYcMJD42jvomnbqSW0NMkKXXou4SXk-rogzSjYFUNjY9-NZnN3o0x2dYI~zRwrQeQc6v~OQyelnA1jE5T4pROIXGOka1umrdMuCzEAf3u8V8yI204-YvUaQU2lCeYBtjK2YjqnhuzoGNr4W7CqKxhmj2d7lMKpF89RQps3H-Q~RHRl0hvemKrqoU3ZXvelQmhx5KHYxUAGzIfDcgvG~yJXe136eylhlBCrkpSzNnTWP-cE~h-OV7r4kMV6gfVi4hJLUcG6CqjUCaCB85kI9Y8hUW7or1Z5pKWPOK~eXXFmcdoCFwlnpInlY7gwgzw__',
    facadeMaterial: 'пластик',
    furniture: 'Braun',
    tableTop: 'Постформинг',
    price: 29200,
    priceSale: 21700,
},
{
    productID: 5,
    productPhoto: 'https://s3-alpha-sig.figma.com/img/580f/a128/2b15afd20aa53cf61c78129900d67050?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T~0UHS8l7G6oIAVrKZyfyqBMx8UNf2xmTUbSMsvrHYYjdcQJHJVqgTSQf282QqW9EME0SzK7igW0uwnU9ODCD3HjzqkzXOtL5DcIkTBwwQUyumhKOvGUJfXPz61qiY6VQzoYkqP9mxSaNLuLRn0m6TxeZGxmQrk1U8OkRBU2AbjtMQZAAyBCO4yCZg7L1pPegwmfsMtFmVUOLB9wVIXiOgpsAAaJm6OIlsrX8W-N3v1WBkx1HrEio8boDC4HVyj2QYOJzQNgWNun9T-563iR5oOdQFO0E9fHVJbGMGMH6cvsZFB4UiHU7thgblmQ4CHGxhKA45oJMFCosixtgTobxg__',
    facadeMaterial: 'Массив и шпонированный МДФ',
    furniture: 'Blum',
    tableTop: 'Компакт-плита',
    price: 61100,
    priceSale: 45300,
},
{
    productID: 6,
    productPhoto: 'https://s3-alpha-sig.figma.com/img/f420/9cdd/bc130412f74462645a90dafda42a4f87?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k5d8lJMjsMcxDzcrd4ribNBOq0o~zVyZ2e3AMfe2M6W4nImdLmmHuW9Sew5xWFhRVNCRGNmOMH99W7R9qFY1qDQeirp~5~CQzum~Lw6Ql22erL4kn-GNdIBZyELj9-TE5VBiPkRSaV49N25go2e9w0dM7FgIixeEJFnYdmyV593p8M9JpVMkRklPOsnG~WSTKAH3AFwWt1hOfMNn63jpmgEv6149i3ZsTVnoyRekI4klFEZHWSzDJQMZam1LipBzHhDDka-qsMZBWnObt8O1OMUwg7dnssqiLwm5mcS-gcaFnIZtHDd3IGxkqUwHeJG-9C5ze4DrCsGvPTC4TSZ9XQ__',
    facadeMaterial: 'Крашенный МДФ и шпонированный МДФ',
    furniture: 'Hettich',
    tableTop: 'Постформинг',
    price: 34600,
    priceSale: 25700,
},
{
    productID: 7,
    productPhoto: 'https://s3-alpha-sig.figma.com/img/4717/7eb8/b2383342f667cc32b19308a00299b90c?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dao-HtUGn93gXwx9bYnKzRU-WOh9zx8Pb6TtNiJtlmdPhdxRET0HP0NcLiWZtNhyPU7ikJFo6K7yxCUyzbLVuzlxPclFBN6Ws~eimDBXv9ww-xfN~JuDPoaLuLiclA4yHadOfZEc3nh1dcZP2YkT~JZWACujSezVVEuD2MbUbTqamzZx2tr-REvQavzWIDZwICssXYmBLo~gE7WltoYn~tPuhi-~YtGbNTL8VAk5YP~IOcVxvS6kL1aTjrysbwv3QO~250bjr3AJviocLKxIMZM8cA~iNrE2uzdzkKtbxsVwLlRBlUUzBpGarJwwFdJdnqny01wwHsyoifuaFHQI-w__',
    facadeMaterial: 'Крашенный МДФ',
    furniture: 'Hettich',
    tableTop: 'Искусственный камень',
    price: 32200,
    priceSale: 23900,
},
{
    productID: 8,
    productPhoto: 'https://s3-alpha-sig.figma.com/img/680a/283a/043606f972c22697d3bbacf0103f3ade?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cRfImkjWG0BdJidNHYDgeRMfwqo8aeA2-Gq9PQYNjxsExDYmK0GP-05eSLwrwNYxrjDGF0xl5UFWg6KToEUyz4opOsiWzxY3QZZlYQ~lTYc20z4fdrCabB2IhYTMSuxtrBjEQq00DUoqrDtZFlbRu3F6y93DM2dxE~5g9SeCja-twy1KjG7LGxO0M7cIiui6KkINWEIJVEU3Ks82CcvpyO4AosSUgMJ6VBZM~zWxPqwYXPudewDAA3cJQk-Dnb41WngOeSotqahPDP-Fq4EaXL55ske3qLGrJTxePbpntS4tWEThDk29JqeW70VVcJhpaWyaDE7IvDFUoe-3r5FxzQ__',
    facadeMaterial: 'Крашенный МДФ',
    furniture: 'Hettich',
    tableTop: 'Компакт панель',
    price: 26850,
    priceSale: 19990,
},
{
    productID: 9,
    productPhoto: 'https://s3-alpha-sig.figma.com/img/a619/6b63/9590fa5471dccfa17d520ec17e342bbb?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gZKs~21KhEL7zE3KS2b0h9L0q5ynxq~BIaThMUrpkIchdfdgS1xcXMhScE-0D6GEDozhA6AZnGhgc8pJSsQVocw5fjOWC-X2ozEbgklu7pr8lFls~MJ797sroM1nusQC02yz6hD-qq94-gxL8LKU93eO3btHFzCcALuDaQTUVMOLCw17iuVKEEFaZtviRpTUT~GcR354guhWGOYKmADUU4Kn0ksrRNaBgW7JUZpxE0nEgIk5QKKHAvGAqc~ZxPptYjF19xQbodqQuYkR-dskNtvEU2s7YW41I80PEBiThcE0bpCS-MH~BPM2CGvtNY3VGs1gwUrN~bGTg-yxbcA~uw__',
    facadeMaterial: 'Крашенный МДФ',
    furniture: 'Blum',
    tableTop: 'Постформинг',
    price: 27300,
    priceSale: 20200,
},


        ],

        kitchenArguments: [
{
    id: 21,
    photo: 'https://s3-alpha-sig.figma.com/img/4e4b/1c12/e691597781bd0431e9beb3bed5b9bb9d?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hKO8PY9ltwreLhX37u2S36AOc3jh-CGCz~0YXZRP5hwIkFYCB~SnG0f35EAhxu4pA7VOO8e57biqt~Uws5S6o7KgO10oup9aJQCo98n68Lb1a74Mu2gFYhOGzetdz0CsxcU1clHjO6Jr-HZMllKS3b1YHwVnhu~MSI7M3SyVLn~SHeJ0OtHFRGcwAvV9mA399EE3nUWHCIqaU1YNfNgwfaYbLNO3g0EA5CRr8NBtRexYLeiJ4BmFPdstZStPvDC1fpCdb3Ju87N~UJDZSJX9Hsf3I2JMzdrN1LbQimbv-DgVRy0Y1Itfc7O5510rA~~EDX6Wb~0sj4eb1UmkA7wb4g__',
    title:'Современные фасады',
    description: `Наши фасады на 40% долговечнее обычных, так как они влагоустойчивы и не подвержены повреждениям. В наличии более 250 фактур и 2000 оттенков. 									`,

},
{
    id: 22,
    photo: 'https://s3-alpha-sig.figma.com/img/4ab1/7114/afeacb341987879e7d0cd1a87c7f9d7a?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YjtcVLnDXm58keQfeBmotKb2UQMm5gF4Rqr-RiTYCwQnlfAA6xu9uHBeKITCxMF1105Se7iCzT-FAYl-hwzs0kpaPl5NFiXQZwChmepvejfak5xd~6J7ExEm6m9Fz9kSMic8we6GLAodQEmNFxi-cGhHwMnwKFkeiMg3AthPaMGobb0cu6xbOwmVCyR2XI~suoagKsbmoLviiVds7zMVRZ06jb60zsgpZSDcEezg3ShgJIdA8fuIx1P2ECsqBKaHuCjxs7cjQISIqANo~2pHG0nN9EIYgsVpF3dVqmth2AyMbOczsx9LUppXw-t~Gvm3mxbszzmwXH3G8IDbP06T-Q__',
    title:'Прочные столешницы',
    description: 'Наши столешницы на 25% прочнее и в 2 раза влагоустойчивее чем обычные. В наличии 10 покрытий и 170 вариантов расцветок и фактур.',

},
{
    id: 23,
    photo: 'https://s3-alpha-sig.figma.com/img/035f/ecff/843d81d0d926153a3b53b65d9e39b47c?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UOT3Y5FUMQyz2~yu8oY5Vm5TOzAspB5Oi9oHu7WNfoKmdh5C9vvyl4z79Pl2g0WMA6VHu8hspUcwS4RkOa0w5pmDDIUM9oT5uuEJVrVNWX1TFanHB6by0XKHOPIoX-8MYYiDs1kizqmMGpBpBfncgORIDtjUo~hjh8~WgPyEmSztSPDTMxzl19Ws00VY1v~7K2cpm9-f9j3MOGMGkDBzfRS8CQ3X2NvRH6GQNV9VCZ-en2tg4YD-H3cXxIo6-cI6wsWGBpqaJgrGkGbcOg~PTC-74ZuVLBRZBaqarpCtaKzmQjwfjU69CjOvZ6EGcwABbEhr~pUObsor7TSZnhmWDg__',
    title:'Долговечная и функциональная фурнитура',
    description: 'Выдерживает более 20 лет службы. Создает максимальный комфорт и удобство пользования кухней.',

},
{
    id: 24,
    photo: 'https://s3-alpha-sig.figma.com/img/a721/4f08/0947f3bf67eb4110a540bff125569cc7?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KTIbza9houAr-KMuwgaOWJcOUZpCZTkTdrWDzLpWtB2Ch8h~FGtmavj5KvMG7jpbmTA5IW7QaoERiBeNtz3F66pq5NiuywEkYREnwTVgyDLyswHyZANz3kZHjeXMPz5rXde2enXji~SBD5yafid9mcX0~Lh47IzPLjBPrsarBaYHu1ZI-I-dS7VRsLwG04IRV0XArHuLKE~3H6lmrzzNcHEXHkNXmEPENeDsdAi2fZNAgdT~v9OJ4b2LuyTFaVEqX03ijmt~YkiPwmq0KFecu2A0WUUPRdkWUUw8dSnyuymPYgfQlPFce33o2d-hb1hkDYX0kS6gTGBCZHtEMKbfHw__',
    title:'Полный комплект документов',
    description: 'Вы получите: договор, кассовый чек, гарантийный талон и правила эксплуатации. Это гарантирует защиту Ваших прав.',

},
{
    id: 25,
    photo: 'https://s3-alpha-sig.figma.com/img/825c/5b72/268f978faa57aa860d7318829124409c?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c4UIHXW1ECGcjD1IS01T5Mv6tJzd7032D48XtUDQVcK0~oKOov9kKk8ztCqzACaO5NBqP11JoMKdNfrH4dRL5~2~w0BYEWY-KRyCuCK8L4PDvibdfMaUFkewMU-aj3V82Us2EFzvYE-fZ3vIDUzS7ERtxVvlnqJ9C3CPn1H5OXJ4Cxn3Y5Q3jC79HWw-jGgHTNoB-U0M4g9IwcWV4YKNkrukfFSM3543t3dqAQcYaTFVLq6p0dgbPkF-pGydh1Zhb7YDUvYXZ-1KSPDGx9CSdUyoK2nig9FTlNCPfzWCfKdWSuo7UvT2t~UBUgr3GTWfdFvmgeKhUqyySDVWJcWd~w__',
    title:'Опытные и вежливые сборщики',
    description: 'Наши сборщики вежливы и аккуратны. Соберут, установят и вынесут строительный мусор. Имеют стаж работы с кухнями  не менее 6 лет.',

},
{
    id: 26,
    photo: 'https://s3-alpha-sig.figma.com/img/6243/38de/2ffa62da860a765f64a385fe5387f084?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eGct57Dh2JUwajkTUEV3veFfUx~na9x4fl1P6KzAi8dnYRgH2DZQ7DbCrL6EfTkpsCQFqyX9lgy9Y91hHM48v9A-vOKCuiSxIAQXFx3cWLI7u~KJwUIYrYKsWBNdog0~mqE3NNOluU8KvuwnsuZauJVq5HV60GvY-CQsOMRnPz-nyo1aGhDQ5x3KVy~G9irOGxDJiTCCI0O2Fq6Juqj6suKMcpXDUbTrget9gOjKrR93QNgXgctxfES7AXTr87GHPXn6GDJRczkfKOGDnH1VJz8m2bNx2tdGBA85B596cFgeqmShuX01RTc3qq~8AkXwi-9oyaSPkebpGUPUj1o4hw__',
    title:'Бесплатная доставка и сборка кухни',
    description: 'Мы бесплатно доставим, соберем и установим Вашу кухню в любой точке Краснодара.',

},

        ]


    }


export default backend