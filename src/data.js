const items = [
    {
      id: 1,
      title: "Подушка из натурального латекса",
      img: "images/Pillow-latex.jpg",
      desc: "Эргономичная подушка, обеспечивающая оптимальную поддержку шейного отдела позвоночника.",
      category: 'pillows',
      price: 4900
    },
    {
      id: 2,
      title: "Одеяло из микрофибры",
      img: "images/Microfiber-blanket.jpg",
      desc: "Легкое и мягкое одеяло, изготовленное из высококачественной микрофибры.",
      category: "blankets",
      price: 3990
    },
    {
      id: 3,
      title: "Постельное бельё из египетского хлопка",
      img: "images/Egiptyan-linen.jpg",
      desc: "Набор постельного белья, выполненный из 100% египетского хлопка высокого качества.",
      category: "linen",
      price: 7800
    },
    {
        id: 4,
        title: "Ортопедический матрас",
        img: "images/Orthopedic-mattress.jpg",
        desc: "Матрас с ортопедической поддержкой для правильного положения позвоночника во время сна.",
        category: "mattresses",
        price: 29900
    },
    {
        id: 5,
        title: "Шелковое постельное бельё",
        img: "images/silk-linen.jpg",
        desc: "Набор постельного белья из натурального шелка для комфортного и роскошного сна.",
        category: "linen",
        price: 19900
    },
    {
        id: 6,
        title: "Подушка с памятью формы",
        img: "images/Pillow-with-shape-memory.jpg",
        desc: "Подушка, которая адаптируется к форме головы и шеи, обеспечивая оптимальную поддержку во время сна.",
        category: "pillows",
        price: 5980
    },
    {
        id: 7,
        title: "Одеяло с гусиным пухом",
        img: "images/Goose-down-blanket.jpg",
        desc: "Теплое и пушистое одеяло, наполненное высококачественным гусиным пухом.",
        category: "blankets",
        price: 14999
    },
    {
        id: 8,
        title: "Массажный коврик для ног",
        img: "images/Foot-Massage-Mat.jpg",
        desc: "Комфортный коврик для массажа стоп, который помогает расслабить напряженные мышцы ног.",
        category: "accessories",
        price: 2999
    },
    {
        id: 9,
        title: "Увлажнитель воздуха",
        img: "images/Air-humidifier.jpg",
        desc: "Увлажнитель воздуха с функцией ароматерапии, которая помогает создать благоприятную атмосферу для сна.",
        category: "accessories",
        price: 12430
    },
    {
        id: 10,
        title: "Ортопедическая подушка для беременных",
        img: "images/pillow-for-pregnant.jpg",
        desc: "Специальная подушка, которая обеспечивает комфорт и поддержку для беременных во время сна.",
        category: "pillows",
        price: 6990
    },
    {
        id: 11,
        title: "Подогреваемый матрасный топпер",
        img: "images/Heated-mattress-topper.jpg",
        desc: "Топпер для матраса с функцией подогрева, которая позволяет наслаждаться комфортным сном даже в холодное время года.",
        category: "mattresses",
        price: 19990
    },
    {
        id: 12,
        title: "Мягкое покрывало",
        img: "images/Soft-bedspread.jpg",
        desc: "Покрывало для кровати с мягким и уютным флисовым покрытием.",
        category: "blankets",
        price: 4900
    },
    {
        id: 13,
        title: "Ортопедическая подушка для шеи",
        img: "images/Orthopedic-Neck-Pillow.jpg",
        desc: "Подушка с эргономичной формой, которая помогает снизить нагрузку на шейный позвоночник.",
        category: "pillows",
        price: 1400
    },
    {
        id: 14,
        title: "Набор постельного белья из бамбукового волокна",
        img: "images/bamboo-linen.jpg",
        desc: "Набор постельного белья, изготовленный из натурального бамбукового волокна, обладающего свойствами гипоаллергенности и мягкости.",
        category: "linen",
        price: 14900
    },
    {
        id: 15,
        title: "Сумка для хранения постельного белья",
        img: "images/linen-bag.jpg",
        desc: "Удобная сумка для хранения постельного белья, которая позволяет сохранить его в чистоте и порядке.",
        category: "accessories",
        price: 1900
    },
    {
        id: 16,
        title: "Одеяло с эффектом веса",
        img: "images/Blanket-with-weight-effect.jpg",
        desc: "Одеяло, которое создает чувство приятного обхвата, способствуя расслаблению и улучшению качества сна.",
        category: "blankets",
        price: 11990
    },
    {
        id: 17,
        title: "Жаккардовое постельное бельё",
        img: "images/Jacquard-bed-linen.jpg",
        desc: "Набор постельного белья из высококачественного жаккардового материала с изысканным узором.",
        category: "linen",
        price: 9990
    },
    {
        id: 18,
        title: "Ортопедическое ролетное кресло-кровать",
        img: "images/armchair-bed.jpg",
        desc: "Удобное кресло-кровать с ортопедическим роллером, которое поддерживает правильное положение позвоночника во время отдыха и сна.",
        category: "furniture",
        price: 49900
    },
    {
        id: 19,
        title: "Маска для сна",
        img: "images/sleep-mask.jpg",
        desc: "Мягкая маска для сна, которая помогает создать темноту и уютное ощущение вокруг глаз.",
        category: "accessories",
        price: 1200
    },
    {
        id: 20,
        title: "Пуховая подушка",
        img: "images/Down-pillow.jpg",
        desc: "Подушка, наполненная пухом высокого качества, для идеальной поддержки головы и шеи во время сна.",
        category: "pillows",
        price: 8900
    }
];
    
export default items;