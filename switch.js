function greet(name) {
  let message = '';
  switch (name) {
    case 'taro':
      message = 'こんにちは';
      break;
    case 'john':
      message = 'hello';
      break;
    default:
      message = '登録なし';
      break;
  }
  console.log(message);
}

greet('taro');
greet('john');
greet('pochi');

