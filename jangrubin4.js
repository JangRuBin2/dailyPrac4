function exampleOne(first, second, dataType) {
  if(typeof(first) !== dataType && typeof(second) !== dataType) {
    return new Error(`매개변수 first, second 모두 ${dataType} 타입이어야 합니다.`);
  }
}
// console.log(exampleOne("ss","Ss","string"))
// ?exampleOne은 first, second매개변수를 넣고 데이터 타입을 검사함
// ?-> 입력한 데이터타입과 동일 해야함

function arrayLengthEven(array) {
  if(array.length % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
// ?arrayLengthEven은 배열을 넣어서 함수를 실행하는데 
// ?배열의 길이가 짝수면 true를 반환, 홀수면 false를 반환한다

function isExampleTwo(first, second) {

  // exampleOne함수를  호출해서 타입검사를 따로 합니다
  // 타입 검사가 실패하면 에러를 발생시켜 함수가 실행되지 않도록 조치함
  
  // console.log(exampleOne(["대머리","독수리"], ["알파고","비비고"], 'string'))
  let arrayTypeCheck = exampleOne(2,3,"number")
 if(!arrayTypeCheck) {
//  실행
let booleanResult;

  if(first < second) {
    booleanResult = true;
  } else {
    booleanResult = false;
  }

  if(typeof(booleanResult) ==='boolean') {
    return booleanResult;
  } else {
    return new Error("조건식이 boolean이 아니어서 리턴하지 못했습니다");
  }


 }
  //타입검사 실패 
 else {
  throw new Error("타입을 확인해주세요")
 }

// ?isExampleTwo에 exampleOne함수를 호출해서 타입 검사해줌
// ? 에러가 생기면 throw new Error
}
isExampleTwo(2,3)

let basicData = [4,6,23,5,94,35,44,66];

function exampleThree(array, functionOne, functionTwo) {
    // array의 모든 원수는 숫자(정수)여야 함
  for(let i=0; i<array.length; i++) {
    if(typeof(array[i]) !== "number" || (array[i] | 0) !== array[i]) {
      throw new Error("array는 정수타입이어야 합니다")
    }
  }
  // 매개 변수 인자로 들어오는 함수 두개는 데이터 타입이 모두 함수여야 함
  if(typeof(functionOne) !== "function" || typeof(functionTwo) !== "function") {
    throw new Error("functionOne, functionTwo는 함수 타입이어야 합니다")
  }  
  // 실행 됐을 때
  else {
    let arrayResult = [[null, null],[null, null],[null, null],[null, null]];
  // array의 length는 짝수여야함, 홀수라면 10을 추가해서 짝수로 만듬
  let arrayLengthCheck = arrayLengthEven(["ㄴㄴ"])
  
  }
  

  

  // 매개변수 array는 배열의 순서 한쌍씩 값의 크기를 비교하여
  // 비교한 작은 값을 arrayResult의 원소배열의 0번째
  // 큰 값은 arrayResult 원소배열의 첫번째에 넣어준다
  
  
  
  

  return arrayResult;
}

console.log(exampleThree(basicData,exampleOne,isExampleTwo));
//  콘솔을 확인하여
// 함수 exampleThree의 리턴 값을 통해 재조립 된 배열을 만드시오