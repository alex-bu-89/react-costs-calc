const products = [
  // BOILER
  { sku:'1', title: 'Настенный газовый котел (одноконтурный)', category: { id: 'boiler', title: 'Вид котла' }, price: { regular: 1000, service: 100 }, quantity: 1, form: { type: 'checkbox', name: 'gas' }, description: '', img_src: '#' },
  { sku:'2', title: 'Настенный газовый котел (двухконтурный)', category: { id: 'boiler', title: 'Вид котла' }, price: { regular: 1000, service: 100 }, quantity: 1, form: { type: 'checkbox', name: 'gas' }, description: '', img_src: '#' },
  { sku:'3', title: 'Настенный электрический котел', category: { id: 'boiler', title: 'Вид котла' }, price: { regular: 1000, service: 100 }, quantity: 1, form: { type: 'checkbox' }, description: '', img_src: '#' },
  { sku:'4', title: 'Напольный котел', category: { id: 'boiler', title: 'Вид котла' }, price: { regular: 1000, service: 100 }, quantity: 1, form: { type: 'checkbox' }, description: '', img_src: '#' },
  { sku:'5', title: 'Бойлер косвенного нагрева до 200 литров', category: { id: 'boiler', title: 'Вид котла' }, price: { regular: 1000, service: 100 }, quantity: 1, form: { type: 'checkbox' }, description: '', img_src: '#' },
  // RESERVE BOILER
  { sku:'6', title: 'Настенный котел', category: { id: 're-boiler', title: 'Резервный котел' }, price: { regular: 1000, service: 100 }, quantity: 1, form: { type: 'checkbox' }, description: '', img_src: '#' },
  { sku:'7', title: 'Напольный котел', category: { id: 're-boiler', title: 'Резервный котел' }, price: { regular: 1000, service: 100 }, quantity: 1, form: { type: 'checkbox' }, description: '', img_src: '#' },
  // BOILER PIPING
  { sku:'8', title: 'Радиаторная система отопления', category: { id: 'boiler-piping', title: 'Обвязка котельной' }, price: { regular: 1000, service: 100 }, quantity: 1, form: { type: 'checkbox' }, description: '', img_src: '#' },
  { sku:'9', title: 'Радиаторная система отопления + теплые полы', category: { id: 'boiler-piping', title: 'Обвязка котельной' }, price: { regular: 1000, service: 100 }, quantity: 1, form: { type: 'checkbox', name: 'radiator' }, description: '', img_src: '#' },
  { sku:'10', title: 'Радиаторная система отопления + бойлер косвенного нагрева', category: { id: 'boiler-piping', title: 'Обвязка котельной' }, price: { regular: 1000, service: 100 }, quantity: 1, form: { type: 'checkbox', name: 'radiator' }, description: '', img_src: '#' },
  { sku:'11', title: 'Радиаторная система отопления + бойлер косвенного нагрева + теплые полы', category: { id: 'boiler-piping', title: 'Обвязка котельной' }, price: { regular: 1000, service: 100 }, quantity: 1, form: { type: 'checkbox', name: 'radiator' }, description: '', img_src: '#' },
  { sku:'12', title: 'Гидравлические разделитель и насосные модули', category: { id: 'boiler-piping', title: 'Обвязка котельной' }, price: { regular: 1000, service: 100 }, quantity: 1, form: { type: 'checkbox' }, description: '', img_src: '#' },
  { sku:'13', title: 'Обвязка котельной сталью', category: { id: 'boiler-piping', title: 'Обвязка котельной' }, price: { regular: 1000, service: 100 }, quantity: 1, form: { type: 'checkbox' }, description: '', img_src: '#' },
  { sku:'14', title: 'Автоматика погодазависамая', category: { id: 'boiler-piping', title: 'Обвязка котельной' }, price: { regular: 1000, service: 100 }, quantity: 1, form: { type: 'checkbox' }, description: '', img_src: '#' },
  { sku:'15', title: 'Автоматика (бойлер, теплый пол, радиаторы)', category: { id: 'boiler-piping', title: 'Обвязка котельной' }, price: { regular: 1000, service: 100 }, quantity: 1, form: { type: 'checkbox' }, description: '', img_src: '#' },
  // CHIMNEY
  { sku:'16', title: 'Коаксиальный дымоход в деревянной стене или каркас', category: { id: 'chimney', title: 'Дымоход' }, price: { regular: 1000, service: 100 }, quantity: 1, form: { type: 'checkbox' }, description: '', img_src: '#' },
  { sku:'17', title: 'Коаксиальный дымоход в бетонной стене', category: { id: 'chimney', title: 'Дымоход' }, price: { regular: 1000, service: 100 }, quantity: 1, form: { type: 'checkbox'}, description: '', img_src: '#' },
  { sku:'18', title: 'Дымоход модульный (сэндвич) "Эконом"', category: { id: 'chimney', title: 'Дымоход' }, price: { regular: 1000, service: 100 }, quantity: 1, form: { type: 'checkbox' }, description: '', img_src: '#' },
  { sku:'19', title: 'Дымоход модульный (сэндвич) "Вулкан"', category: { id: 'chimney', title: 'Дымоход' }, price: { regular: 1000, service: 100 }, quantity: 1, form: { type: 'checkbox' }, description: '', img_src: '#' },
  { sku:'20', title: 'Подключение к существующему дымоходу', category: { id: 'chimney', title: 'Дымоход' }, price: { regular: 1000, service: 100 }, quantity: 1, form: { type: 'checkbox' }, description: '', img_src: '#' },
  // HEATING
  { sku:'21', title: 'Площадь отапливаемых помещений', category: { id: 'heating', title: 'Теплые полы' }, price: { regular: 1000, service: 100 }, quantity: 1, form: { type: 'number', label: 'м²' }, description: '', img_src: '#' },
  { sku:'22', title: 'Количество отпапливаемых помещений', category: { id: 'heating', title: 'Теплые полы' }, price: { regular: 1000, service: 100 }, quantity: 1, form: { type: 'number', label: 'шт.' }, description: '', img_src: '#' },
  { sku:'23', title: 'Монтаж стяжки теплого пола машинным способом', category: { id: 'heating', title: 'Теплые полы' }, price: { regular: 1000, service: 100 }, quantity: 1, form: { type: 'number', label: 'м²' }, description: '', img_src: '#' },
  // RADIATOR HEATING
  { sku:'24', title: 'Настенные радиаторы', category: { id: 'rad-heating', title: 'Радиаторное отопление' }, price: { regular: 1000, service: 100 }, quantity: 1, form: { type: 'number', label: 'шт.' }, description: '', img_src: '#' },
  { sku:'25', title: 'Встроенные конвекторы в пол', category: { id: 'rad-heating', title: 'Радиаторное отопление' }, price: { regular: 1000, service: 100 }, quantity: 1, form: { type: 'number', label: 'шт.' }, description: '', img_src: '#' },
  // WATER SYSTEM
  { sku:'26', title: 'Колличество приборов', category: { id: 'water-system', title: 'Водоснабжение' }, price: { regular: 1000, service: 100 }, quantity: 1, form: { type: 'number', label: 'шт.' }, description: '', img_src: '#' },
  { sku:'27', title: 'Колличество полотенцесушителей на рециркуляции', category: { id: 'water-system', title: 'Водоснабжение' }, price: { regular: 1000, service: 100 }, quantity: 1, form: { type: 'number', label: 'шт.' }, description: '', img_src: '#' },
  { sku:'28', title: 'Монтаж электрического водонагревателя', category: { id: 'water-system', title: 'Водоснабжение' }, price: { regular: 1000, service: 100 }, quantity: 1, form: { type: 'number', label: 'шт.' }, description: '', img_src: '#' },
  { sku:'29', title: 'Рециркуляция ГВС', category: { id: 'water-system', title: 'Водоснабжение' }, price: { regular: 1000, service: 100 }, quantity: 1, form: { type: 'checkbox' }, description: '', img_src: '#' },

  // BORE
  { sku:'30', title: 'Обвязка скважины до 50 метров', category: { id: 'bore', title: 'Скважина' }, price: { regular: 1000, service: 100 }, quantity: 1, form: { type: 'checkbox' }, description: '', img_src: '#' },
  { sku:'31', title: 'Обвязка колодца', category: { id: 'bore', title: 'Скважина' }, price: { regular: 1000, service: 100 }, quantity: 1, form: { type: 'checkbox' }, description: '', img_src: '#' },
  { sku:'32', title: 'Монтаж системы фильтрации Watter Boss 700', category: { id: 'bore', title: 'Скважина' }, price: { regular: 1000, service: 100 }, quantity: 1, form: { type: 'checkbox' }, description: '', img_src: '#' },
  { sku:'33', title: 'Обвязка буфферного бака (низкий дебет)', category: { id: 'bore', title: 'Скважина' }, price: { regular: 1000, service: 100 }, quantity: 1, form: { type: 'checkbox' }, description: '', img_src: '#' },
  // CANALIZATION
  { sku:'34', title: 'Количество приборов', category: { id: 'canalisation', title: 'Канализация' }, price: { regular: 1000, service: 100 }, quantity: 1, form: { type: 'number', label: 'шт.' }, description: '', img_src: '#' },
  { sku:'35', title: 'Монтаж СБО под ключ', category: { id: 'canalisation', title: 'Канализация' }, price: { regular: 1000, service: 100 }, quantity: 1, form: { type: 'checkbox' }, description: '', img_src: '#' },
  { sku:'36', title: 'Продух для СБО', category: { id: 'canalisation', title: 'Канализация' }, price: { regular: 1000, service: 100 }, quantity: 1, form: { type: 'checkbox' }, description: '', img_src: '#' },
]

export default products
