const products = [
  // BOILER
  { sku:'1', title: 'Настенный газовый котел (одноконтурный)', category: { id: 'boiler', title: 'Вид котла' }, price: { regular: 1000, service: 100 }, form: { type: 'checkbox', name: 'gas' }, description: '', img_src: '#' },
  { sku:'2', title: 'Настенный газовый котел (двухконтурный)', category: { id: 'boiler', title: 'Вид котла' }, price: { regular: 1000, service: 100 }, form: { type: 'checkbox', name: 'gas' }, description: '', img_src: '#' },
  { sku:'3', title: 'Настенный электрический котел', category: { id: 'boiler', title: 'Вид котла' }, price: { regular: 1000, service: 100 }, form: { type: 'checkbox' }, description: '', img_src: '#' },
  { sku:'4', title: 'Напольный котел', category: { id: 'boiler', title: 'Вид котла' }, price: { regular: 1000, service: 100 }, form: { type: 'checkbox' }, description: '', img_src: '#' },
  { sku:'5', title: 'Бойлер косвенного нагрева до 200 литров', category: { id: 'boiler', title: 'Вид котла' }, price: { regular: 1000, service: 100 }, form: { type: 'checkbox' }, description: '', img_src: '#' },
  // RESERVE BOILER
  { sku:'6', title: 'Настенный котел', category: { id: 're-boiler', title: 'Резервный котел' }, price: { regular: 1000, service: 100 }, form: { type: 'checkbox' }, description: '', img_src: '#' },
  { sku:'7', title: 'Напольный котел', category: { id: 're-boiler', title: 'Резервный котел' }, price: { regular: 1000, service: 100 }, form: { type: 'checkbox' }, description: '', img_src: '#' },
  // BOILER PIPING
  { sku:'8', title: 'Радиаторная система отопления', category: { id: 'boiler-piping', title: 'Обвязка котельной' }, price: { regular: 1000, service: 100 }, form: { type: 'checkbox' }, description: '', img_src: '#' },
  { sku:'9', title: 'Радиаторная система отопления + теплые полы', category: { id: 'boiler-piping', title: 'Обвязка котельной' }, price: { regular: 1000, service: 100 }, form: { type: 'checkbox', name: 'radiator' }, description: '', img_src: '#' },
  { sku:'10', title: 'Радиаторная система отопления + бойлер косвенного нагрева', category: { id: 'boiler-piping', title: 'Обвязка котельной' }, price: { regular: 1000, service: 100 }, form: { type: 'checkbox', name: 'radiator' }, description: '', img_src: '#' },
  { sku:'11', title: 'Радиаторная система отопления + бойлер косвенного нагрева + теплые полы', category: { id: 'boiler-piping', title: 'Обвязка котельной' }, price: { regular: 1000, service: 100 }, form: { type: 'checkbox', name: 'radiator' }, description: '', img_src: '#' },
  { sku:'12', title: 'Гидравлические разделитель и насосные модули', category: { id: 'boiler-piping', title: 'Обвязка котельной' }, price: { regular: 1000, service: 100 }, form: { type: 'checkbox' }, description: '', img_src: '#' },
  { sku:'13', title: 'Обвязка котельной сталью', category: { id: 'boiler-piping', title: 'Обвязка котельной' }, price: { regular: 1000, service: 100 }, form: { type: 'checkbox' }, description: '', img_src: '#' },
  { sku:'14', title: 'Автоматика погодазависамая', category: { id: 'boiler-piping', title: 'Обвязка котельной' }, price: { regular: 1000, service: 100 }, form: { type: 'checkbox' }, description: '', img_src: '#' },
  { sku:'15', title: 'Автоматика (бойлер, теплый пол, радиаторы)', category: { id: 'boiler-piping', title: 'Обвязка котельной' }, price: { regular: 1000, service: 100 }, form: { type: 'checkbox' }, description: '', img_src: '#' },
  // BOILER PIPING
  { sku:'16', title: 'Коаксиальный', category: { id: 'chimney', title: 'Выбор дымохода' }, price: { regular: 1000, service: 100 }, form: { type: 'checkbox' }, description: '', img_src: '#' },
  { sku:'17', title: 'Сендвич (нержавейка)', category: { id: 'chimney', title: 'Выбор дымохода' }, price: { regular: 1000, service: 100 }, form: { type: 'number', label: 'м²' }, description: '', img_src: '#' },
  { sku:'18', title: 'Проход перекрытий или стен газобетон-дерево', category: { id: 'chimney', title: 'Выбор дымохода' }, price: { regular: 1000, service: 100 }, form: { type: 'number', label: 'шт.' }, description: '', img_src: '#' },
  { sku:'19', title: 'Проход перекрытий или стен кирпич-бетон', category: { id: 'chimney', title: 'Выбор дымохода' }, price: { regular: 1000, service: 100 }, form: { type: 'number', label: 'шт.' }, description: '', img_src: '#' },
  // HEATING
  { sku:'20', title: 'Количество радиаторов', category: { id: 'heating', title: 'Выбор отопительных приборов в помещениях' }, price: { regular: 1000, service: 100 }, form: { type: 'number', label: 'шт.' }, description: '', img_src: '#' },
  { sku:'22', title: 'Количество напольных конвекторов', category: { id: 'heating', title: 'Выбор отопительных приборов в помещениях' }, price: { regular: 1000, service: 100 }, form: { type: 'number', label: 'шт.' }, description: '', img_src: '#' },
  { sku:'23', title: 'Количество помещений с теплым полом', category: { id: 'heating', title: 'Выбор отопительных приборов в помещениях' }, price: { regular: 1000, service: 100 }, form: { type: 'number', label: 'шт.' }, description: '', img_src: '#' },
  { sku:'24', title: 'Площадь теплого пола', category: { id: 'heating', title: 'Выбор отопительных приборов в помещениях' }, price: { regular: 1000, service: 100 }, form: { type: 'number', label: 'м²' }, description: '', img_src: '#' },
  { sku:'25', title: 'Полусухая стяжка теплого пола', category: { id: 'heating', title: 'Выбор отопительных приборов в помещениях' }, price: { regular: 1000, service: 100 }, form: { type: 'checkbox' }, description: '', img_src: '#' },
  // CANALIZATION
  { sku:'26', title: 'Количество точек по дому', category: { id: 'canalisation', title: 'Канализация внутри дома' }, price: { regular: 1000, service: 100 }, form: { type: 'number', label: 'шт.' }, description: '', img_src: '#' },
  { sku:'27', title: 'Проходка через стены / перекрытия, материал дерево-газобетон', category: { id: 'canalisation', title: 'Канализация внутри дома' }, price: { regular: 1000, service: 100 }, form: { type: 'number', label: 'шт.' }, description: '', img_src: '#' },
  { sku:'28', title: 'Проходка через стены / перекрытия, материал керпич-бетон', category: { id: 'canalisation', title: 'Канализация внутри дома' }, price: { regular: 1000, service: 100 }, form: { type: 'number', label: 'шт.' }, description: '', img_src: '#' },
  // WATER SYSTEM
  { sku:'29', title: 'Количество точек по дому', category: { id: 'water-system', title: 'Водоснабжение внутри дома' }, price: { regular: 1000, service: 100 }, form: { type: 'number', label: 'шт.' }, description: '', img_src: '#' },
  { sku:'30', title: 'Проходка через стены / перекрытия, материал дерево-газобетон', category: { id: 'water-system', title: 'Водоснабжение внутри дома' }, price: { regular: 1000, service: 100 }, form: { type: 'number', label: 'шт.' }, description: '', img_src: '#' },
  { sku:'31', title: 'Проходка через стены / перекрытия, материал кирпич-бетон', category: { id: 'water-system', title: 'Водоснабжение внутри дома' }, price: { regular: 1000, service: 100 }, form: { type: 'number', label: 'шт.' }, description: '', img_src: '#' },
  // WATER TREATMENT
  { sku:'32', title: 'Монтаж корпуса фильтра bigblue', category: { id: 'water-treatment', title: 'Выбор системы водоподготовки' }, price: { regular: 1000, service: 100 }, form: { type: 'number', label: 'шт.' }, description: '', img_src: '#' },
  { sku:'33', title: 'Монтаж умягчителя waterboss', category: { id: 'water-treatment', title: 'Выбор системы водоподготовки' }, price: { regular: 1000, service: 100 }, form: { type: 'number', label: 'шт.' }, description: '', img_src: '#' },
  { sku:'34', title: 'Монтаж системы фильтрации колонного типа', category: { id: 'water-treatment', title: 'Выбор системы водоподготовки' }, price: { regular: 1000, service: 100 }, form: { type: 'number', label: 'шт.' }, description: '', img_src: '#' },
  // EXTERNAL-WORKS
  { sku:'35', title: 'Монтаж СБО Юнилос-астра 5', category: { id: 'external-works', title: 'Наружние работы' }, price: { regular: 1000, service: 100 }, form: { type: 'checkbox' }, description: '', img_src: '#' },
  { sku:'36', title: 'Монтаж вентиляционного стояка канализации', category: { id: 'external-works', title: 'Наружние работы' }, price: { regular: 1000, service: 100 }, form: { type: 'checkbox' }, description: '', img_src: '#' },
  { sku:'37', title: 'Монтаж скавжинного насоса с адаптером', category: { id: 'external-works', title: 'Наружние работы' }, price: { regular: 1000, service: 100 }, form: { type: 'checkbox' }, description: '', img_src: '#' },
  { sku:'38', title: 'Монтаж скважинного насоса с кессоном', category: { id: 'external-works', title: 'Наружние работы' }, price: { regular: 1000, service: 100 }, form: { type: 'checkbox' }, description: '', img_src: '#' },
]

export default products
