import AdditionalSolution from "./components/AdditionalSolutions"

let backend =

{
    menu: ['Каталог', 'Модели', 'Консультация', 'Дополнительно', 'Как заказать', 'Отзывы', 'Контакты'],
    HelpSearch: [
        {
            photo: 'https://s3-alpha-sig.figma.com/img/40b9/3f25/ad29d92a900e308f6d22c945a250357b?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j2uYk5EBsBHk8DVw04fuWTZptGNzK~qswM4w8y951vDmpL2~iJ-6z5f4GrU~aAsLeMQzZnVOIABsLMnaJW5Auwk8gTP0qFKe3ZXOBI9hj6VBHr14pcy0KL0sUlVLJW2I42XW4QSV-SlNAXjQtk8wEnlXZmzRGKGORuiVaBmh4JNMERpA2zfWxRtKPRD3eN1dKPZsCOUh9AFa3bfWmh02pb9EJg3SQRgAUXRTODwlaRjmF6keaijO1LUTVSmLxP3rGOhREsWI-f~fH08iLdLGEWg315lF2Zk6JlxfVG1GCa-O4ePcsPbztLL~rOz6TLT3VGVoe3NhN2IHzvPxJ0YdCw__',
            title: 'Современные кухни',
            description: 'У нас более 650 моделей современных кухонь.'
        },
        {
            photo: 'https://s3-alpha-sig.figma.com/img/b8b0/d517/1edf4cc43e235fc320ccb9b55f0fcfa8?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AIO3cFSYaLre-LRirxKLlRyrIZTjISNKPYDJnvE9k6WyEOOS6R1nDrB8vWWBV8McWyYCsZ7jg3sPUC0zzarY6MGdEHO9ITU2E0phG7cxA6aedzXzMl4b8EB0a0l7Y1Nm5NjnvFxJgO-6lVrupIeB7DE0JDIzHTg86FgZ6IZ5-UxDcLjOZGjZMvEgm0v~SGuCxxvXeC3wVmyf8avqNu4flwAa1QaBNS4pBHSA6AW~aV8mcfdQVd9kMEb2b0NT1Op4ooC6RKyfY-SQb~JX3H7Xw57YJMnnwOI-7R2iaaYq~krC9bZ5-qpYWj1-opIkZruwIttzqL1YWI~HkYRUNlAvsg__',
            title: 'Кухни Лофт',
            description: 'У нас более 470 моделей кухонь в стиле Лофт. '
        },
        {
            photo: 'https://s3-alpha-sig.figma.com/img/d011/63f8/81e58b033d10007a396f141aff3f5594?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=byZuhIQECY6ph78MfPE9lGDi6GjhuHaaLxgwpNgN8p2OSDzYPa3Jumi4Tja-5h7oyfuhpsJ5ehKpiy9jP93KafOFOzQe7oHp0CBwQSm7ko6~0m4w5Y-Wx0~UJA3WCeHu6M6-EAHtGoVtGSrYkI2nu3GBPP96YWm-fQhxDx~S5ORlnReDi~7cHss0KDlANt5tUCgSGDmu0kbEfq2skBi5nvqXZdDIqPnE~STwv7JwPiBqO0~oxYIoJSIfWlF3kGLPTJzu8b~o6GKkX1E3ouSzPBZI6Uz~KM~pHpirILBQLaaOa5YvNGi51EdGvnOWAlcSeqhW91YNOCkIjZ4Idsv8aA__',
            title: 'Классические кухни',
            description: 'У нас более 730 моделей классических кухонь.'
        }
    ],

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

    additionalSolution: [
        {
            photo: 'https://s3-alpha-sig.figma.com/img/15d6/aa9a/43975d9b3aad7f35669e6bd5a01c6d86?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KV~J--nYtP7dYxUdreL1qgdbWFXMFynDV74YeL5Syhk~JLKTcqmyJvjNhUbX1ECjvgVeeDXVTmnovcxBezWY2uZLC9iuYKk-LzkP7fKM~M-3ZZuKOT7sjDF-evQ4NzGv3lpMGAsFa3rJX8odJOq2NozUNnLelGaKC52ZAR6w5MaV2pDYtGreN3NyTYUja6JAhiSno~K8lIeIOCWvIde7bdGiJq4y6e-xyf3zx5whPrPkqeoco8zhK-Kg-9vyNuwMq2VFiJc4-s7VfrqyX4zndGEvov1CPQaEnzCcJXcv81OIa7jTL6puX8rBn6FAux8i9wxRNtcPEt83oNp95XD2RQ__',
            title: 'Подключение техники для кухни'

        },
        {
            photo: 'https://s3-alpha-sig.figma.com/img/2ae4/3b30/8845656c1c452428dfeb684787d4a6f3?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UeDFphiQede8C60IZ0SX08UtM9MfCcPkf~aIJI4-oKzyGvuxEDRTCUnLA~pVPZ9VGKQ97RGBl5w4X6acXgzhzJcns~vWYSGsl9Oe2oEAlBN3iZCJGGASSMRT2fIPa8Y3e08-H1fiBNrnJhO1m87uzXjJL0m0ElXRsUtYa7Wqjz98-Z8QAkFFq4FccP1qKeUr~x4Hp2KoOkRgRPMlOYVBs4-9lHO8oEo5Rflkp8oJCH~q4kyG7Fz0ZMf1qKMqKTIWSGhn~Qe4rBNWB7~26XVk-T2FB33jlAHm3W51rspOC~eCAAehGi4p~TuWpTcqvPubPinbQ5frWDplkOnlEiqZpA__',
            title: 'Подключение освещения'

        },

        {
            photo: 'https://s3-alpha-sig.figma.com/img/3003/e781/99e86c775f56a8bfb9978c83db4b27be?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c6Iz69nw01bQGBAHGcC9m6UezHi1aunql5E~HKwP6~CWf9x~~NccG-jntL23B610taK9VBkATE7inACd92u~mNRPAQAcQ~EnwNEQf4Nt4buXu-8o6wXXFjaYHpkbDKnM0JoW4k2wErGJ1tk2T1qEzm~t8Xa9rsKEMAubnQqOXgXvC9rASrO6xgJnFBJkPaxN6mu2GgvB2YiuxW4e28qSeBOaKV1JjX805P2LayZOkqqQDDVoGlzqDSsbemWw2rinENFWhZw1oqo6x8sTT3AtJir~5lJ5SBaf8do~hpBgze66t1flPxl-xg6ZuJNeevCDV98fhan84WPZV7v5eHS6Fg__',
            title: 'Подключение сантехники'

        }

    ],

    kitchenArguments: [
        {
            id: 21,
            photo: 'https://s3-alpha-sig.figma.com/img/4e4b/1c12/e691597781bd0431e9beb3bed5b9bb9d?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hKO8PY9ltwreLhX37u2S36AOc3jh-CGCz~0YXZRP5hwIkFYCB~SnG0f35EAhxu4pA7VOO8e57biqt~Uws5S6o7KgO10oup9aJQCo98n68Lb1a74Mu2gFYhOGzetdz0CsxcU1clHjO6Jr-HZMllKS3b1YHwVnhu~MSI7M3SyVLn~SHeJ0OtHFRGcwAvV9mA399EE3nUWHCIqaU1YNfNgwfaYbLNO3g0EA5CRr8NBtRexYLeiJ4BmFPdstZStPvDC1fpCdb3Ju87N~UJDZSJX9Hsf3I2JMzdrN1LbQimbv-DgVRy0Y1Itfc7O5510rA~~EDX6Wb~0sj4eb1UmkA7wb4g__',
            title: 'Современные фасады',
            description: `Наши фасады на 40% долговечнее обычных, так как они влагоустойчивы и не подвержены повреждениям. В наличии более 250 фактур и 2000 оттенков. 									`,

        },
        {
            id: 22,
            photo: 'https://s3-alpha-sig.figma.com/img/4ab1/7114/afeacb341987879e7d0cd1a87c7f9d7a?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YjtcVLnDXm58keQfeBmotKb2UQMm5gF4Rqr-RiTYCwQnlfAA6xu9uHBeKITCxMF1105Se7iCzT-FAYl-hwzs0kpaPl5NFiXQZwChmepvejfak5xd~6J7ExEm6m9Fz9kSMic8we6GLAodQEmNFxi-cGhHwMnwKFkeiMg3AthPaMGobb0cu6xbOwmVCyR2XI~suoagKsbmoLviiVds7zMVRZ06jb60zsgpZSDcEezg3ShgJIdA8fuIx1P2ECsqBKaHuCjxs7cjQISIqANo~2pHG0nN9EIYgsVpF3dVqmth2AyMbOczsx9LUppXw-t~Gvm3mxbszzmwXH3G8IDbP06T-Q__',
            title: 'Прочные столешницы',
            description: 'Наши столешницы на 25% прочнее и в 2 раза влагоустойчивее чем обычные. В наличии 10 покрытий и 170 вариантов расцветок и фактур.',

        },
        {
            id: 23,
            photo: 'https://s3-alpha-sig.figma.com/img/035f/ecff/843d81d0d926153a3b53b65d9e39b47c?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UOT3Y5FUMQyz2~yu8oY5Vm5TOzAspB5Oi9oHu7WNfoKmdh5C9vvyl4z79Pl2g0WMA6VHu8hspUcwS4RkOa0w5pmDDIUM9oT5uuEJVrVNWX1TFanHB6by0XKHOPIoX-8MYYiDs1kizqmMGpBpBfncgORIDtjUo~hjh8~WgPyEmSztSPDTMxzl19Ws00VY1v~7K2cpm9-f9j3MOGMGkDBzfRS8CQ3X2NvRH6GQNV9VCZ-en2tg4YD-H3cXxIo6-cI6wsWGBpqaJgrGkGbcOg~PTC-74ZuVLBRZBaqarpCtaKzmQjwfjU69CjOvZ6EGcwABbEhr~pUObsor7TSZnhmWDg__',
            title: 'Долговечная и функциональная фурнитура',
            description: 'Выдерживает более 20 лет службы. Создает максимальный комфорт и удобство пользования кухней.',

        },
        {
            id: 24,
            photo: 'https://s3-alpha-sig.figma.com/img/a721/4f08/0947f3bf67eb4110a540bff125569cc7?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KTIbza9houAr-KMuwgaOWJcOUZpCZTkTdrWDzLpWtB2Ch8h~FGtmavj5KvMG7jpbmTA5IW7QaoERiBeNtz3F66pq5NiuywEkYREnwTVgyDLyswHyZANz3kZHjeXMPz5rXde2enXji~SBD5yafid9mcX0~Lh47IzPLjBPrsarBaYHu1ZI-I-dS7VRsLwG04IRV0XArHuLKE~3H6lmrzzNcHEXHkNXmEPENeDsdAi2fZNAgdT~v9OJ4b2LuyTFaVEqX03ijmt~YkiPwmq0KFecu2A0WUUPRdkWUUw8dSnyuymPYgfQlPFce33o2d-hb1hkDYX0kS6gTGBCZHtEMKbfHw__',
            title: 'Полный комплект документов',
            description: 'Вы получите: договор, кассовый чек, гарантийный талон и правила эксплуатации. Это гарантирует защиту Ваших прав.',

        },
        {
            id: 25,
            photo: 'https://s3-alpha-sig.figma.com/img/825c/5b72/268f978faa57aa860d7318829124409c?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c4UIHXW1ECGcjD1IS01T5Mv6tJzd7032D48XtUDQVcK0~oKOov9kKk8ztCqzACaO5NBqP11JoMKdNfrH4dRL5~2~w0BYEWY-KRyCuCK8L4PDvibdfMaUFkewMU-aj3V82Us2EFzvYE-fZ3vIDUzS7ERtxVvlnqJ9C3CPn1H5OXJ4Cxn3Y5Q3jC79HWw-jGgHTNoB-U0M4g9IwcWV4YKNkrukfFSM3543t3dqAQcYaTFVLq6p0dgbPkF-pGydh1Zhb7YDUvYXZ-1KSPDGx9CSdUyoK2nig9FTlNCPfzWCfKdWSuo7UvT2t~UBUgr3GTWfdFvmgeKhUqyySDVWJcWd~w__',
            title: 'Опытные и вежливые сборщики',
            description: 'Наши сборщики вежливы и аккуратны. Соберут, установят и вынесут строительный мусор. Имеют стаж работы с кухнями  не менее 6 лет.',

        },
        {
            id: 26,
            photo: 'https://s3-alpha-sig.figma.com/img/6243/38de/2ffa62da860a765f64a385fe5387f084?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eGct57Dh2JUwajkTUEV3veFfUx~na9x4fl1P6KzAi8dnYRgH2DZQ7DbCrL6EfTkpsCQFqyX9lgy9Y91hHM48v9A-vOKCuiSxIAQXFx3cWLI7u~KJwUIYrYKsWBNdog0~mqE3NNOluU8KvuwnsuZauJVq5HV60GvY-CQsOMRnPz-nyo1aGhDQ5x3KVy~G9irOGxDJiTCCI0O2Fq6Juqj6suKMcpXDUbTrget9gOjKrR93QNgXgctxfES7AXTr87GHPXn6GDJRczkfKOGDnH1VJz8m2bNx2tdGBA85B596cFgeqmShuX01RTc3qq~8AkXwi-9oyaSPkebpGUPUj1o4hw__',
            title: 'Бесплатная доставка и сборка кухни',
            description: 'Мы бесплатно доставим, соберем и установим Вашу кухню в любой точке Краснодара.',

        },

    ],
    disainers: [
        {
            name: 'Юлия',
            photo: 'https://s3-alpha-sig.figma.com/img/b5cd/0a9d/5cd6288a5f3417b9e662d2b2807c617b?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FFdiHg5KfNLynqUGDq1Eiyd3P-~J8zcIOnQIS7BYBVQsLgIqQ0x4VHOmA6EgRgoyF5ML7cw4PLGhAGzBVjl4H0dNsmUSIe0SBlm778B7~cimUDsRcmH8FFE4GFU5vyc5xGcUmZ1dhgEAZL07ScOMKc~kENh-4cYkIoUI5NVLtgHn5U-8FfNo2E7DfrSnqcMkNRoFjALFA6XoegY5hfQbQ417xOC5J2uRlecarM4YVwXfJ3F7tobETYmvstHfeA8kBl4c9ynFJuRsmBMYbX5XMduoRDAYD8NdD95NMvtEM9i4pEp3Lvltr2uXwcxz0muFso5Ns8xr-a3oyrmKeXiNxQ__',
            experience: 2013
        },
        {
            name: 'Оксана',
            photo: 'https://s3-alpha-sig.figma.com/img/a05b/74a3/f3b012ae84e8323f7b7afe8fcb4b4697?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wi1y8mELCNa7rCZs7YzH-9fHEgnPV96lv8XIZM6oqS38oflMZgXva6qNb2xXzwh~UnlKy0GFOj8RMCYGXW2XUPa~Yals5vGWxsmwiIzYtIEQLrqrsYPSiIprEri82eylFFsCDQA2G2ic8LcXdYamcBl~ByzRABQmQSSQmFJBfsiotakZLfCw2-mRrEAgHEDuLZedcBC~UyTPIyhvAJtHYeXiRRRBo9gckjVvIB3nmJl4tikZXt3PWOu7fAxcyX4GX6i~UkVUk3WXrOGX8PEhvA6jQiHW3J5zlOQopX97WkSchZwcCBq5MZ6BDM1e-ATNDkQiTRSWEm~svP6zk5BT7Q__',
            experience: 2011
        },
        {
            name: 'Татьяна',
            photo: 'https://s3-alpha-sig.figma.com/img/a4af/0b74/2080ad6ee07b16a63ca0390b6bb9a024?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FtHn3HXEuiL-dBXz0~zdjWHKyItsP9oAZgs0~7G3tdU4DYHc~1RRhBoOAHYa-uI8UONeYp8EfIbX6G2IlG5ODm~ULWQETuZbt9lFBfNmIzIYSAh-bqUKWmTXVi3K5JqH8w7UlrElLcKAlqpzLcp8Apuv86w82NqIjwuj2qiVn11~Kgwv5JnxfL4lMxJg90pJUDXJL99AsJHwx1WXfHVrqSgn5hCfJw781kOFnmazok6M1S0MhPRzMB4sr~-b66I5iDi-7vmh7p~9~PGDbvhGHVm3Eys-gYPthy3ZVfkr4W9oTf~ApwDBcBAQCYTnaD0at0158Dhq3IcUkedoPbXHhA__',
            experience: 2015
        }
    ]
    ,

    fiveSteps: [
        {
            photo: 'https://s3-alpha-sig.figma.com/img/61ad/43f6/94ee7564693d3c314abc367a263ace70?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g6eJs41hKkWk~MfENQsANPigIbwEJPqWAZMW-YiV9PzPnAihqjz1zsvChpjDol~ZOUa4aZ2xlmiJSnixtRyEXu6OuPm6HEKx9Uc~8gFSfXGQob~3iFgVSzyCg7oXJdcl14F-ujk7ETvWRK6CCDpERLyf3ipXTtlKwpc7LsZSxQbkNryOPtat-F44Cpn~5zn81XWsFjk-O4PpRXJvsm1a2-yU9aa3LOqcdSixAn-DOyKXSGr51cGFimZ8favc5njtP9pi95xuiOwQ~8i-O~Hal2SQc-~Ywha3qGl6j8l99SmHgrL-d7~BsPcH0iUHQwpmJYI5PoD4kCuR8JY4PJm3AA__',
            title: 'Заявка',
            info: 'Вы оставляете заявку или звоните нам  +7 (989) 277-94-30  Наш специалист подробно расскажет Вам об особенностях наших кухонь, вариантах оплаты и ее установки.',
        },
        {
            photo: 'https://s3-alpha-sig.figma.com/img/38b1/b4f8/415a17d2c391ce61511e06d2fa70a4aa?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ll0JjeEPFPaDRsICtKKd0jQnk4zxBjTxBZQADV13ooIjogTW97czEZyG6LgUbLsWgxXtTsm1lHy4HqnMiZnWzpljnHpbDOId8eeBKBpA1AqTrGZnoYESJ7zFYGkqYihOQncQ3YfOKYcXqB24lPU1OhATVfWDZ9N9VKeVKeARGF4mh2AG1EJDYMY~OQMYBLbWOFhyJmpXrDNwWZDmESD~zVAuYo7L9Cc1fZWes-p9s5SKBnLor-LlWhCmAl-jMqeKxQMTGHoUKN9hNr7YC--DtZj4xONyyHrDZIQegoFgjtPco-nsse5IVATxLR9QBARv3OuQ692jLwNpsuBzTT4OUA__',
            title: 'Консультация дизайнера ',
            info: 'Наши дизайнеры с 9:00 до 21: 00 помогут Вам подобрать идеальную кухню, проведут замер, сделают проект и рассчитают стоимость.									',
        },
        {
            photo: 'https://s3-alpha-sig.figma.com/img/e82f/662f/e684dd347dd4aaaad8caae84c16bfd11?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EvqX3ZEsIkUhmD~0NzQJXon7VJgirqtr1qebyUTc1PiDrDqW1rKy9lOPjYmiXc0hnDELNLu-jwxPRV1H~OZ9MD2KrsMcTvNa5XAwjpvrbMcIEQ6~Ms9ze7bp1dhg7n0vH1tdqfzroscNOebaMHS5Vb3L2QbfYcRRhKd5nLNOss3S6DhFFWJJgOVxA-nQV8~yFDiTfWdlQLOvwt8N3jTWO8xW1J5cGfYuFSWiX52S3GdctAoa-UQcnpQHSNlCmRIPXzEehIwy-LD9GaZ7glIxuTNNl05-fOOAX6Ahh7LiOV4F2f2ye~FqyDh-o4A8KKEcx66bFf6OvrX0nrI9LvNqVw__',
            title: 'Заключение договора',
            info: 'Подписываем договор, выдаем чек, оформляем рассрочку, согласовываем удобное для Вас время доставки и сборки.',
        },
        {
            photo: 'https://s3-alpha-sig.figma.com/img/ce61/80be/37f47b4eb642850a46fb8b59b82a4829?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dxdv2sonBLzgRwbjOb6MtOPWAffpri~qPjlkenwcgm8jilisZHj6uXnIKlJ3nVwnjUyOtSc-srCDUMZr8bcyf1~-3Lz36O~5Xfk-gbkEg-DH8HDlFnf2WxRhI~c0oA3ANsnBUetnok9Ex8qL4AnWwAn7bfq12LqEidoVyUndTzdmwUC379XzMnFE19~BXnms8yTHleIqVXcKxZzW4mlBxY8Cu-thNHorLP8pD0xewnNe2bPLDbwog1o6YtNNSAVeDxtfOYEYH7souCRms~xXmaLpYsDnXW9k5xH50nKF~s7~tBEWK3PV9BwZD1V5r4uo0jeNOhYPqqonUd8AGSf6ag__',
            title: 'Доставка и сборка кухни',
            info: 'Привезем Вашу кухню, соберем и установим. Время работ зависит от выбранного Вами материала и перечня дополнительных работ. По окончанию сборки делаем уборку, выносим мусор.',
        },
        {
            photo: 'https://s3-alpha-sig.figma.com/img/e5af/c88d/a0a011d2cb1de85f05be6f861a32a2cd?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IMzeLQbFB7OgPkLZYbq4f1u3FY0a6lv3aDEYYKjnkxPctCBJTt6njUsxoLiwzRE8~hqiE86GvZRqXvjC7XZGw3IV4fPVFT3we3ciiOsl2JV8Lo1nwbIFQf1bFRKZXwHBGpVEF8J5G0CkEcKeXAKCAjCE-RPUUwWG~YQm~2Zq1ExDQ3xsgQd1Ib4T76u3H0ObO6zGH0KBlsv~2RdP6eBYmzydF6L9-wjaN9nEvaOOgtwWoL~XNzTPTddhBiIJ807Wg3pYPEmlODGPtG4dh8Uqy0Xbn3wEjeaDSU6LfS-QFITLX1R~abU44ptGN91oODBVUWJxxa2mec7LPj2-NJTmQg__',
            title: 'Поздравляем! Ваша кухня готова!',
            info: 'Теперь вы можете наслаждаться временем проведенным с семьей на Вашей новой кухне.',
        },

    ],

    reviews: [
        {
            data: '22.03.2024',
            userPhoto: 'https://s3-alpha-sig.figma.com/img/3872/2d8c/cdad7cb400610434286fb9716aaeb601?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ohfs2N6LvUAkHZY2ib1s4hOsZ-C~EF1SjdyT4Lh4NBUed1nq~OweS2U1f-m~GC0c8RpD5dQJTyGIaOYedhp7Qz2-ZqcO5BUElPqrHwGKrfDrD98AV8WdrXRaUe7k-2Ih3NJqkgtTmXfkx6fFNlECko4HGDRJZlz82rythkP6BHBEacqoJxszR-08a-hoahHhhjNIdf8f77-M1wEYi-u7zlZqdkv9mbmBGl-jHzODAl9H0MJx~t3CevYphRzlyA6C4M7zn0dvWlWBJZHywXVbaPnJHOAHhYt8H8zWQ9N7ka6sePdQFnY4DJqCi7vgFW0~Xw1zXugV36muETcDhAhLXg__',
            userName: 'Ирина',
            userLastName: 'Егорова',
            rating: 5,
            reviews: 'Заказали кухню в свою квартиру.  Дизайн и качество нас полностью устраивает. С доставкой проблем не возникло, всё привезли без задержки и полный комплект, ничто не повредилось, опытные сборщики  быстро и качественно собрали всю кухню. Кроме того компания сделала нам хорошую скидку, отношение к клиентам очень теплое, спасибо вам.',
            productPhoto: 'https://s3-alpha-sig.figma.com/img/fc46/de19/4481de216beb225f8305119b1d77526f?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fc7sziyHDfPCJKLnd2p2u~p-ZA5SfY8Pu8k1IadmwCJwro1jeQzMP~pcTDGf3HMbVTDVTFmThBkZRbkEK5POhPcndd~ijIG69z8e8ZmkEPy6uuR9UAURcAPx2lEdFIoywdLQXx~LyuOudGU7b1rOSmcKqA4fGMO9EW1AMmN6-avnmpv55N16VeFVf3yfHk4lCjVEiJ79sfC~UbfYIIFTJ0lTV8IRGPNmbMZHONW2bVPb8yHc~NuEaAx~3LW6RR-TR4hHF95EP33-8ZpqNka3QIPloh9LBykoNaUDlatnAos6-eMiK02xMesTCeNwYa8XDm10oXi3eEiYTKQ47HdY7Q__',
        },
        {
            data: '21.03.2024',
            userPhoto: 'https://s3-alpha-sig.figma.com/img/341d/312b/ed219533d7204135eb9b6fed186921dd?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HS1viHgVPw4dKh9czozvi4exXDWhkszAfo65T-CFb65tjf6N9D~KaiTBB7brip4MPEjQVH2yQOwF3fxFU~xphpTuH3mvFU-estkM0WyOEXgPWmjIDfmnSqd0MohFm0EXE2iR8InU81Wc8cZ6G3To4KtQmE6wMRreWqIJUfv2yOAoM2wBf4M3L9WBwI2AuOmi-ed48GdofHBW0x86FvZBLhdK0q5gKFwSj2HF4pAamrGePC~UpCmod6IZSGQS4M6YfgSodzdYBn8msZdZuhnagzxLTHAu1Jfqhz5-TUyBeOKiXxnG2Y48Jnvp3gOmsciwie1uskBW62W3lB2Q6hfu0Q__',
            userName: 'Елена',
            userLastName: 'Федорова',
            rating: 5,
            reviews: 'Компанию «Немецкий стандарт» нашли с мужем в интернете случайно. После  общения с дизайнером, я решила заказать кухню именно там! Впечатлила работа монтажников Евгения и Александра!  Мало того, что они отлично знают своё дело, но также очень вежливы в общении. При установке кухни  учли все мои пожелания, работу выполнили быстро ,чисто и качественно! Пользуюсь кухней уже год и получаю огромное удовольствие.',
            productPhoto: 'https://s3-alpha-sig.figma.com/img/6416/2182/9d902194fb92c4b1d4203bb2c567808c?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Upj2PgLxRj~JJNoaro5oEPODV1K3nS4lC9drh0oKJRok9Nchf9ssNIdAgWKd4gg5jJNnWqVDiiy-r-LQfNdMZ3fF8pfECcjCwZP2TboPA3iGu-WER4cmEzcDa7I2k8DTV583qPC-6OAiPRvyxQrEwBZSB1ybfZ0297Fc5O0ZgwFdSg47mjR5lylt0OpAs-lJJKkpsibp2YK1maZFzZ31rrZg-yVVde7a1v6dRcauF1a2zSVdpZwNJzSXkOs1epfKWebqHRhe-R0seQXOEZrxB~wBoC6MvWgRouebIw3W90dzQnwny3dIeLq26zMCoRMwpe93OMe8gcizAQJFggW6ww__',
        },
        {
            data: '12.03.2024',
            userPhoto: 'https://s3-alpha-sig.figma.com/img/c974/e086/2ee619ebea2361b504b5570d54a677b4?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ms8zXaz7wGcG4doUo2xbp0iFIXd0Ubofm3q0R1MVAap9HoGUd7f5yZP-dZFAXOzcaZqJ9w~~PtfvfLPEFO9O5qPGUYXTiFa~-agGWs5Mao6h40pzz138Rw9IFYCt47mXKZG9xHGcb6e7L4Avwhpfr8Au1yQh~wjl~0a6qeALdZNSvnM3avSAxhUmmA9Gg3PASm-IRuMX5OES979AwJxp0I4vq99PGb-DkMCPcOOnaUw2TU822i3uHr~z71BX~R2aZ5i5NsF32txPsMgLTmSv~065HJ~MB0RNVGaJujV-FSjw8n~EAaTAt0euXx-TLhpNAWwMWvJBmWUJwnN1zCFHFg__',
            userName: 'Николай',
            userLastName: 'Гриценко',
            rating: 5,
            reviews: 'Пересмотрев большую часть компаний по изготовлению кухонь мы с женой  наткнулись на компанию "Немецкий стандарт", г. Краснодар. Пользуемся кухней вот уже на протяжении четырех  месяцев.  На сегодняшний день ни с какими проблемами не сталкивались, наоборот - стало более уютно и приятно проводить время на кухне. Получилось все, как хотели.',
            productPhoto: 'https://s3-alpha-sig.figma.com/img/615e/81c2/ca617f895b80a3a27b46dc4f2e84cf07?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P85V87swNSl9D0qOEPGnVoA8K6Bbps1ur8~3kCda-~YMqeMl4lwWrVaHGFNPCU3UUGLY4Hv7PXOaaRBkAWYhH3lToUS--igZZZZQUeXHKZp3i1mABAznPK5BCX~BiPWmMrFo~WDuBMaZULi40U4VX1-obUCmwa3biBfBiDSvWuo-5KxgD5fFeRTI2fcM0AawOvpUFQgd2Hy79ItFx6cz5FPyNAZefLTEIhDdhv0ol8HeMFR8P1QywXJnDbU4PvujaSPw~svDaCAmVFWeIrZzo~IRUqwsGlF70k98fearXq~1aqGiG7KL0Q86bku8zruut8FKJ03-j3dn5zYOt-rfqw__',
        },
        {
            data: '22.03.2024',
            userPhoto: 'https://s3-alpha-sig.figma.com/img/6fec/88b5/01027848ef1c8593b0ae211ac41cca81?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HuYP3oyL7ttR1oKFWDNX473zCuLMCvjm3BQEW5809dCYmgpWCHgVm4FqySRMkSL8sDU1bA0fv2y-ZjllZJu1~asHb7RLNW36gHMJ5BysxtYg6ZvDKEH22vX341lzARytEknedmANo-15UjQ3cOO5xMbhA2OY6~CyZuBRZ1Y4X6t7L-Ejpca1BeqXwFD-Q1YHk5RU-oHhv08l3-0Zp62sUmFN5bqtPEvGLLDoaMq7t8XXz9VeAmMSUQnx0LTjBqGeZqdYI-tUcy-NWpCzd0VkSHgtDci-eq04oBLexRqNO4nJaRkgabk~D3O9CMp7HXOR8yWAOyrmNcynzUNavlA6og__',
            userName: 'Ольга',
            userLastName: 'Юхневич',
            rating: 5,
            reviews: 'Долго подыскивали где заказать мебель для кухни. Случайно нашли  "Немецкий стандарт" поинтересовались смогут ли изготовить кухню как мы хотим. Сделали у них заказ. Выполнено все в срок ( и даже чуть- чуть раньше), качественно с учетом  всех наших пожеланий по дизайну и размерам. Большое спасибо. Отдельное спасибо дизайнеру Юлии за  советы по подбору материалов и фурнитуры. Все вежливы, учтивы, корректны и доброжелательны.',
            productPhoto: 'https://s3-alpha-sig.figma.com/img/a199/d8db/83aa2b5fd99268cd7694b1aec86f8a2a?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FZga2GmXcrZKdD3sux-MChk889C406Ch6Sl8BcTVycjX52ksuy5lS7jz4wISg5WoOYZNbyz2Oe43huaQxVEMA0ZqNROXqklDP1CC0xwYEqCNmuik21tYoOqLd4ZqY4Wn-UifGG6rxDtkuB1V8v38-OtlIYdVdJiVkr9j8otnCtrfI5joRg9sBz0JDVuspmSuUMS2UKJE-ur9r249rk15z-UV4FycSA38iE43v7DRcUbaxZOj9SsH0c3btME5jmAKoXwm-rIvUH4pFCtN-Mw5WQN1CGeIM9oW7Yk9pK3vZO01Ct-Eit36Bq~vja2LmVP0Jv1RnraGZ4gxn6DK~PvPag__',
        },
        {
            data: '10.03.2024',
            userPhoto: 'https://s3-alpha-sig.figma.com/img/4641/bee7/10fa0d430a596f3c2828ed2b820590d4?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Lx8Me40HCaTbrW31xFNA8fneyDlFaOaxWnwQ5OLUVhrVaC88dmdM89ESE5uDPjPONOiL3xR9ysjM1LbumrBw9LqkmasAd2jfJ4vybESi3Xe5yNMXOsI3~Hq9xPiGgrrmuqLLez02kZro3z0X0rpGV9sQMi0aFtnobHqOzhHE~CZfbc1UHELdsr3BNFlke7~NfysdFz-afpNvJYTOeb4cr6g1IBbcMQtAAwI8zApo7Qu-oYRVGcoB2DPz0wxq-JW1gtHfBXBBmgSRO1GVNb0chpuzPgMVyHKWNYkktXIiZ7RVdUOmX3eflRpkwbYN5uqJkBm0wriwA7OoUVIkJ4hb4Q__',
            userName: 'Виктор',
            userLastName: ' Степанов',
            rating: 5,
            reviews: 'Решили заказать кухонный гарнитур для небольшой кухни. Среди огромного количества фирм, выбрали компанию "Немецкий стандарт" в г. Краснодар, сейчас с уверенностью можем сказать, что не ошиблись! Благодарны за качественное изготовление мебели. Дизайнер Оксана учла все пожелания. Парни по установке работают быстро, чисто, тихо! Спасибо большое всему коллективу! В дальнейшем будем сотрудничать только с Вами!',
            productPhoto: 'https://s3-alpha-sig.figma.com/img/3497/5dd7/d57a46da0fa0139545c2df86da2c0411?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dY57lh7OtmnsT4zCumeTcWfuK2EgEeXjZ7D-d-tqA0up6pkeTB36mgXZuWAV3dTLPetG6H50VoCBE7qywQGIAIV9ou-LVGT7TX6gBSVVx00tqfjjKniWtQVwL7VJc765p7-ZGP1V8p82lpjuELgfCw~KDJYnaUTNuxgy2BP9sHbDl1vpGhJP9MR4CyK8yRfXpeBeGmD7wr6CTSjqGGl63J86LX3tEv8PE8HGGcTTHQqhwJymYWIEVaUJzvHJ-Hsm5SbPNBOlLkY9Al5d~xiyT4wVQ~8KpQKhNDJ7~spsnVm6jBLczYGVZOJFJ7WWp6ZX0-VVo34-qFCQG0qYyMYseA__',
        },
    ],
    svg: [ 
        '<svg width="29" height="4" viewBox="0 0 29 4" fill="none" xmlns="http://www.w3.org/2000/svg"}><rect x="29" width="4" height="29" rx="1" transform="rotate(90 29 0)" fill="#E3010F"/></svg>',
        '<svg width="29" height="14" viewBox="0 0 29 14" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="4" width="4" height="29" rx="1" transform="rotate(-90 0 4)" fill="#E3010F"/><rect width="4" height="14" rx="1" fill="#E3010F"/></svg>',
        '<svg width="30" height="14" viewBox="0 0 30 14" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="4" height="14" rx="1" fill="#E3010F"/><rect x="26" width="4" height="14" rx="1" fill="#E3010F"/><rect y="4" width="4" height="30" rx="1" transform="rotate(-90 0 4)" fill="#E3010F"/></svg>',
        '<svg width="31" height="14" viewBox="0 0 31 14" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="14" width="4" height="30" rx="1" transform="rotate(-90 0.5 14)" fill="#E3010F"/><rect x="0.5" y="4" width="4" height="30" rx="1" transform="rotate(-90 0.5 4)" fill="#E3010F"/></svg>',
        '<svg width="31" height="14" viewBox="0 0 31 14" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="14" width="4" height="19" rx="1" transform="rotate(-90 0.5 14)" fill="#E3010F"/><rect x="26.5" width="4" height="14" rx="1" fill="#E3010F"/><rect x="0.5" y="4" width="4" height="30" rx="1" transform="rotate(-90 0.5 4)" fill="#E3010F"/></svg>',
        '<svg width="31" height="14" viewBox="0 0 31 14" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="19.5" y="14" width="4" height="10" rx="1" transform="rotate(-90 19.5 14)" fill="#E3010F"/><rect x="4.5" y="14" width="4" height="14" rx="1" transform="rotate(180 4.5 14)" fill="#E3010F"/><rect x="27" width="4" height="14" rx="1" fill="#E3010F"/><rect x="1" y="4" width="4" height="30" rx="1" transform="rotate(-90 1 4)" fill="#E3010F"/></svg>'
    ],
    roomArea: [
        'До 5 м²', 'До 8 м²', 'До 15 м²', 'Другое'
    ]
}


export default backend