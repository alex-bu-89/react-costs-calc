const products = [
  // BOILER
  { sku:'1', title: 'Газовый одноконтурный', category: { id: 'boiler', title: 'Выбор котла' }, price: { regular: 1000, service: 100 }, form: { type: 'checkbox', name: 'gas' }, description: '', img_src: '#' },
  { sku:'2', title: 'Газовый двухконтурный', category: { id: 'boiler', title: 'Выбор котла' }, price: { regular: 1000, service: 100 }, form: { type: 'checkbox', name: 'gas' }, description: '', img_src: '#' },
  { sku:'3', title: 'Электрический', category: { id: 'boiler', title: 'Выбор котла' }, price: { regular: 1000, service: 100 }, form: { type: 'checkbox' }, description: '', img_src: '#' },
  { sku:'4', title: 'Дизельный', category: { id: 'boiler', title: 'Выбор котла' }, price: { regular: 1000, service: 100 }, form: { type: 'checkbox' }, description: '', img_src: '#' },
  { sku:'5', title: 'Твердотопливный', category: { id: 'boiler', title: 'Выбор котла' }, price: { regular: 1000, service: 100 }, form: { type: 'checkbox' }, description: '', img_src: '#' },
  { sku:'6', title: 'Бойлер косвенного нагрева до 200л', category: { id: 'boiler', title: 'Выбор котла' }, price: { regular: 1000, service: 100 }, form: { type: 'checkbox' }, description: '', img_src: '#' },
  { sku:'7', title: 'Бойлер косвенного нагрева более 200л', category: { id: 'boiler', title: 'Выбор котла' }, price: { regular: 1000, service: 100 }, form: { type: 'checkbox' }, description: '', img_src: '#' },
  { sku:'8', title: 'Энергоаккумулятор до 500л', category: { id: 'boiler', title: 'Выбор котла' }, price: { regular: 1000, service: 100 }, form: { type: 'checkbox' }, description: '', img_src: '#' },
  // BOILER PIPING
  { sku:'9', title: ' Радиаторная сеть', category: { id: 'boiler-piping', title: 'Выбор типа объвязки котельной' }, price: { regular: 1000, service: 100 }, form: { type: 'checkbox', name: 'radiator' }, description: '', img_src: '#' },
  { sku:'10', title: 'Радиаторы + теплый пол', category: { id: 'boiler-piping', title: 'Выбор типа объвязки котельной' }, price: { regular: 1000, service: 100 }, form: { type: 'checkbox', name: 'radiator' }, description: '', img_src: '#' },
  { sku:'11', title: 'Радиаторы + теплый пол + бойлер косвенного нагрева', category: { id: 'boiler-piping', title: 'Выбор типа объвязки котельной' }, price: { regular: 1000, service: 100 }, form: { type: 'checkbox', name: 'radiator' }, description: '', img_src: '#' },
  { sku:'12', title: 'Объвязка с насосными модулями', category: { id: 'boiler-piping', title: 'Выбор типа объвязки котельной' }, price: { regular: 1000, service: 100 }, form: { type: 'checkbox' }, description: '', img_src: '#' },
  { sku:'13', title: 'Погодозависимая автоматика', category: { id: 'boiler-piping', title: 'Выбор типа объвязки котельной' }, price: { regular: 1000, service: 100 }, form: { type: 'checkbox' }, description: '', img_src: '#' },
  { sku:'14', title: 'Автоматика регулировки температуры в помещениях', category: { id: 'boiler-piping', title: 'Выбор типа объвязки котельной' }, price: { regular: 1000, service: 100 }, form: { type: 'checkbox' }, description: '', img_src: '#' },
  // BOILER PIPING
  { sku:'15', title: 'Коаксиальный', category: { id: 'chimney', title: 'Выбор дымохода' }, price: { regular: 1000, service: 100 }, form: { type: 'checkbox' }, description: '', img_src: '#' },
  { sku:'16', title: 'Сендвич (нержавейка)', category: { id: 'chimney', title: 'Выбор дымохода' }, price: { regular: 1000, service: 100 }, form: { type: 'number', label: 'м²' }, description: '', img_src: '#' },
  { sku:'17', title: 'Проход перекрытий или стен газобетон-дерево', category: { id: 'chimney', title: 'Выбор дымохода' }, price: { regular: 1000, service: 100 }, form: { type: 'number', label: 'шт.' }, description: '', img_src: '#' },
  { sku:'18', title: 'Проход перекрытий или стен кирпич-бетон', category: { id: 'chimney', title: 'Выбор дымохода' }, price: { regular: 1000, service: 100 }, form: { type: 'number', label: 'шт.' }, description: '', img_src: '#' },
  // HEATING
  { sku:'19', title: 'Количество радиаторов', category: { id: 'heating', title: 'Выбор отопительных приборов в помещениях' }, price: { regular: 1000, service: 100 }, form: { type: 'number', label: 'шт.' }, description: '', img_src: '#' },
  { sku:'20', title: 'Количество напольных конвекторов', category: { id: 'heating', title: 'Выбор отопительных приборов в помещениях' }, price: { regular: 1000, service: 100 }, form: { type: 'number', label: 'шт.' }, description: '', img_src: '#' },
  { sku:'21', title: 'Количество помещений с теплым полом', category: { id: 'heating', title: 'Выбор отопительных приборов в помещениях' }, price: { regular: 1000, service: 100 }, form: { type: 'number', label: 'шт.' }, description: '', img_src: '#' },
  { sku:'23', title: 'Площадь теплого пола', category: { id: 'heating', title: 'Выбор отопительных приборов в помещениях' }, price: { regular: 1000, service: 100 }, form: { type: 'number', label: 'м²' }, description: '', img_src: '#' },
  { sku:'24', title: 'Полусухая стяжка теплого пола', category: { id: 'heating', title: 'Выбор отопительных приборов в помещениях' }, price: { regular: 1000, service: 100 }, form: { type: 'checkbox' }, description: '', img_src: '#' },
  // CANALIZATION
  { sku:'25', title: 'Количество точек по дому', category: { id: 'canalisation', title: 'Канализация внутри дома' }, price: { regular: 1000, service: 100 }, form: { type: 'number', label: 'шт.' }, description: '', img_src: '#' },
  { sku:'26', title: 'Проходка через стены / перекрытия, материал дерево-газобетон', category: { id: 'canalisation', title: 'Канализация внутри дома' }, price: { regular: 1000, service: 100 }, form: { type: 'number', label: 'шт.' }, description: '', img_src: '#' },
  { sku:'27', title: 'Проходка через стены / перекрытия, материал керпич-бетон', category: { id: 'canalisation', title: 'Канализация внутри дома' }, price: { regular: 1000, service: 100 }, form: { type: 'number', label: 'шт.' }, description: '', img_src: '#' },
  // WATER SYSTEM
  { sku:'28', title: 'Количество точек по дому', category: { id: 'water-system', title: 'Водоснабжение внутри дома' }, price: { regular: 1000, service: 100 }, form: { type: 'number', label: 'шт.' }, description: '', img_src: '#' },
  { sku:'29', title: 'Проходка через стены / перекрытия, материал дерево-газобетон', category: { id: 'water-system', title: 'Водоснабжение внутри дома' }, price: { regular: 1000, service: 100 }, form: { type: 'number', label: 'шт.' }, description: '', img_src: '#' },
  { sku:'30', title: 'Проходка через стены / перекрытия, материал кирпич-бетон', category: { id: 'water-system', title: 'Водоснабжение внутри дома' }, price: { regular: 1000, service: 100 }, form: { type: 'number', label: 'шт.' }, description: '', img_src: '#' },
  // WATER TREATMENT
  { sku:'31', title: 'Монтаж корпуса фильтра bigblue', category: { id: 'water-treatment', title: 'Выбор системы водоподготовки' }, price: { regular: 1000, service: 100 }, form: { type: 'number', label: 'шт.' }, description: '', img_src: '#' },
  { sku:'32', title: 'Монтаж умягчителя waterboss', category: { id: 'water-treatment', title: 'Выбор системы водоподготовки' }, price: { regular: 1000, service: 100 }, form: { type: 'number', label: 'шт.' }, description: '', img_src: '#' },
  { sku:'33', title: 'Монтаж системы фильтрации колонного типа', category: { id: 'water-treatment', title: 'Выбор системы водоподготовки' }, price: { regular: 1000, service: 100 }, form: { type: 'number', label: 'шт.' }, description: '', img_src: '#' },
  // EXTERNAL-WORKS
  { sku:'34', title: 'Монтаж СБО Юнилос-астра 5', category: { id: 'external-works', title: 'Наружние работы' }, price: { regular: 1000, service: 100 }, form: { type: 'checkbox' }, description: '', img_src: '#' },
  { sku:'35', title: 'Монтаж вентиляционного стояка канализации', category: { id: 'external-works', title: 'Наружние работы' }, price: { regular: 1000, service: 100 }, form: { type: 'checkbox' }, description: '', img_src: '#' },
  { sku:'36', title: 'Монтаж скавжинного насоса с адаптером', category: { id: 'external-works', title: 'Наружние работы' }, price: { regular: 1000, service: 100 }, form: { type: 'checkbox' }, description: '', img_src: '#' },
  { sku:'37', title: 'Монтаж скважинного насоса с кессоном', category: { id: 'external-works', title: 'Наружние работы' }, price: { regular: 1000, service: 100 }, form: { type: 'checkbox' }, description: '', img_src: '#' },
]

export default products
