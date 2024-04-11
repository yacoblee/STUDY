///super (메서드 오버라이딩하기)
//원래 부모의 메서드를 그대로 상속받는데, 자식에서 메서드를 자체적으로 정의하면,
///상속받은 메서드가 아닌 자체 메서드를 사용한다.
//하지만 부모의 메서드를 토대로 일부만 변경해서 사용하고 싶고 변경하고 싶다.
//이럴때 커스텀 메서드를 만들어서 사용하는데 이때 super키워드를 사용한다.


///
// constructor로 꼭 인자를 받지 않아도 프로퍼티를 설정하수있다..
// name은 공통적으로 쓰이기 때문에
class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed = speed;
    return (`${this.name} 은/는 속도 ${this.speed}로 달립니다.`);
  }
  stop() {
    this.speed = 0;
    return (`${this.name} 이/가 멈췄습니다.`);
  }
}

class Rabbit extends Animal{
  constructor(name,speed){
    super(name, speed);
    //부모 클래스의 contructor를 실행하는 메서드
  }
  // hide(){
  //   return "토끼"
  // }
  // run(){
  //   return (`${this.name} 은/는 속도 ${this.speed}로 달립니다.`);
  // }
  run(speed){
    return `${super.run(speed)}`
  }
}

const test = new Rabbit("토끼")
console.log(test.run(4))
// const test2 = new Animal(1,"d")
// console.log(test2.run(),"<Test")

////생성자 오버라이딩
