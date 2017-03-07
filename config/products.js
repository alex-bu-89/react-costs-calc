const products = [
  // BOILER
  { sku:'1', title: 'Газовый одноконтурный', category: { id: 'boiler', title: 'Выбор котла' }, price: 1000, service_price: 100, form: { type: 'radio', name: 'gas' }, description: '', img_src: '#' },
  { sku:'2', title: 'Газовый двухконтурный', category: { id: 'boiler', title: 'Выбор котла' }, price: 1000, service_price: 100, form: { type: 'radio', name: 'gas' }, description: '', img_src: '#' },
  { sku:'3', title: 'Электрический', category: { id: 'boiler', title: 'Выбор котла' }, price: 1000, service_price: 100, form: { type: 'checkbox' }, description: '', img_src: '#' },
  { sku:'4', title: 'Дизельный', category: { id: 'boiler', title: 'Выбор котла' }, price: 1000, service_price: 100, form: { type: 'checkbox' }, description: '', img_src: '#' },
  { sku:'5', title: 'Твердотопливный', category: { id: 'boiler', title: 'Выбор котла' }, price: 1000, service_price: 100, form: { type: 'checkbox' }, description: '', img_src: '#' },
  { sku:'6', title: 'Бойлер косвенного нагрева до 200л', category: { id: 'boiler', title: 'Выбор котла' }, price: 1000, service_price: 100, form: { type: 'checkbox' }, description: '', img_src: '#' },
  { sku:'7', title: 'Бойлер косвенного нагрева более 200л', category: { id: 'boiler', title: 'Выбор котла' }, price: 1000, service_price: 100, form: { type: 'checkbox' }, description: '', img_src: '#' },
  { sku:'8', title: 'Энергоаккумулятор до 500л', category: { id: 'boiler', title: 'Выбор котла' }, price: 1000, service_price: 100, form: { type: 'checkbox' }, description: '', img_src: '#' },
  // BOILER PIPING
  { sku:'9', title: ' Радиаторная сеть', category: { id: 'boiler-piping', title: 'Выбор типа объвязки котельной' }, price: 1000, service_price: 100, form: { type: 'radio', name: 'radiator', label: '' }, description: '', img_src: '#' },
  { sku:'10', title: 'Радиаторы + теплый пол', category: { id: 'boiler-piping', title: 'Выбор типа объвязки котельной' }, price: 1000, service_price: 100, form: { type: 'radio', name: 'radiator', label: '' }, description: '', img_src: '#' },
  { sku:'11', title: 'Радиаторы + теплый пол + бойлер косвенного нагрева', category: { id: 'boiler-piping', title: 'Выбор типа объвязки котельной' }, price: 1000, service_price: 100, form: { type: 'radio', name: 'radiator', label: '' }, description: '', img_src: '#' },
  { sku:'12', title: 'Объвязка с насосными модулями', category: { id: 'boiler-piping', title: 'Выбор типа объвязки котельной' }, price: 1000, service_price: 100, form: { type: 'checkbox' }, description: '', img_src: '#' },
  { sku:'13', title: 'Погодозависимая автоматика', category: { id: 'boiler-piping', title: 'Выбор типа объвязки котельной' }, price: 1000, service_price: 100, form: { type: 'checkbox' }, description: '', img_src: '#' },
  { sku:'14', title: 'Автоматика регулировки температуры в помещениях', category: { id: 'boiler-piping', title: 'Выбор типа объвязки котельной' }, price: 1000, service_price: 100, form: { type: 'checkbox' }, description: '', img_src: '#' },
  // BOILER PIPING
  { sku:'15', title: 'Коаксиальный', category: { id: 'chimney', title: 'Выбор дымохода' }, price: 1000, service_price: 100, form: { type: 'checkbox' }, description: '', img_src: '#' },
  { sku:'16', title: 'Сендвич (нержавейка)', category: { id: 'chimney', title: 'Выбор дымохода' }, price: 1000, service_price: 100, form: { type: 'number', label: 'м2' }, description: '', img_src: '#' },
  { sku:'17', title: 'Проход перекрытий или стен газобетон-дерево', category: { id: 'chimney', title: 'Выбор дымохода' }, price: 1000, service_price: 100, form: { type: 'number', label: 'шт.' }, description: '', img_src: '#' },
  { sku:'18', title: 'Проход перекрытий или стен кирпич-бетон', category: { id: 'chimney', title: 'Выбор дымохода' }, price: 1000, service_price: 100, form: { type: 'number', label: 'шт.' }, description: '', img_src: '#' },
]
export default products
