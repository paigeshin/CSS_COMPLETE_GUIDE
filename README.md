# CSS_COMPLETE_GUIDE
I was always annoyed when I was using CSS. Let's overcome it!

**20.02.02**
오늘로 study 마무리

*SASS,SCSS*
          
-nesting 

            .documentation-links {
              list-style: none;
              margin: 1rem 0 0 0;
              padding: 0;
              display: -webkit-box;
              display: -ms-flexbox;
              display: -webkit-flex;
              display: flex;
              flex-direction: column;
            
              li {
                margin: 0.2rem 0;
                background: white;
              }
            
              .documentation-link {
                text-decoration: none;
                color: #521751;
                display: block;
                padding: 0.2rem;
                border: 0.05rem solid #521751;
              }
            }
            
- apply sass or scss
    - command 창에 해당 project로 들어와서 `sass main.scss main.css` 라고 쳐준다.
    - sass {sass} {original}
    

- watching
     - `sass --watch main.scss:main.css`   => 터미널 명령어임.
compile 을 자동으로 해주는 것을 확인해줌.

- nested properties
       
         .container {
           display: -webkit-box;
           display: -ms-flexbox;
           display: -webkit-flex;
           display: flex;
           flex: {
             direction: column;
             wrap: nowrap;
           }
           align-items: center;
           padding: 3rem 0;
           box-sizing: border-box;
         }
        
- variables

        $main-color: #521751;
        
        .section-header {
          border-bottom: 0.05rem solid $main-color;
        }
        
- list of values

       $border-default: 0.05rem solid $main-color;

- map
   - 정의
        
       $colors: (main: #521751, secondary: #fa923f);
   
   - 호출
   
       $border-default: 0.05rem solid map_get($colors, main);
       
- Built in Functions
    -lighten(p1, p2);
    - p1 : color
    - p2 : brightness

        background: lighten(map_get($colors, main), 70%);
    
 
- adding arithmetics
    -기본적으로 multiplication, division, addition, subtraction 가능함.

        .container {
          display: -webkit-box;
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          flex: {
            direction: column;
            wrap: nowrap;
          }
          align-items: center;
          padding: $size-default * 3 0;
          box-sizing: border-box;
        }
        
- Adding Better Import and Partials      
        
    - _variables.scss
    
        //$main-color: #521751;
        $colors: (main: #521751, secondary: #fa923f);
        $border-default: 0.05rem solid map_get($colors, main);
        $size-default: 1rem;
        $size-tiny: 0.2rem;

    - main.css
    
        @import "_variables.scss";
        
        .char-highlight {
          font-weight: bold;
          font-size: 1.4rem;
          color: map_get($colors, main);
        }

- media query in scss

        html {
          font-size: 94.75%;
        
          @media (min-width: 40rem) {
            font-size: 125%;
          }
        
        }

- inheritance,  @extend

        .sass-section {
          border: $border-default;
          background: lighten(map_get($colors, main), 70%);
          padding: 2rem;
          text-align: center;
          width: 90%;
          box-sizing: border-box;
          @media (min-width: 40rem) {
            width: 30rem;
          }
        }
        .sass-introduction {
          @extend .sass-section;
          box-shadow: 0.2rem 0.2rem 0.1rem #ccc;
          p {
            margin: 0;
          }
        }
        
        .sass-details {
          @extend .sass-section;
          margin: 2rem 0;
          @media (min-width: 40rem) {
              width: 30rem;
          }
        }
        
- mixins
    

        @mixin display-flex() {
          display: -webkit-box;
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
        }
        
        .container {
          @include display-flex();
          flex: {
            direction: column;
            wrap: nowrap;
          }
          align-items: center;
          padding: $size-default * 3 0;
          box-sizing: border-box;
        
        
          @media (min-width: 40rem) {
            padding: 3rem 0;
          }
        }
        
- mixin with parameters

        @mixin media-min-width($width){
          @media(min-width: $width){
            @content;
          }
        }
        
        html {
          font-size: 94.75%;
        
          @include media-min-width(40rem){
            font-size: 125%;
          }
        
        }

- understand ampersand operator 
    - 연결을 의미한다

        .documentation-links {
          list-style: none;
          margin: 1rem 0 0 0;
          padding: 0;
          display: -webkit-box;
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          flex-direction: column;
        
          li {
            margin: 0.2rem 0;
            background: white;
          }
        
          .documentation-link {
            text-decoration: none;
            color: map_get($colors, main);
            display: block;
            padding: 0.2rem;
            border: 0.05rem solid map_get($colors, main);
          }
        
          &:hover,
          &:active {
            color: white;
            background: map_get($colors, secondary);
            border-color: map_get($colors, secondary);
          }
        
        }
        
`&.anyClass`  식으로 class로 연결할 수도 있다.

**20.02.01**
- class naming convention
        
     Use kebab-case => because CSS is case-insensitive
     Name by feature => .page-title
     
- BEM
        
     A uniform and consistent way of naming your CSS classes
            
        .block__element--modifier
        .menu-main__item--size-big
        .button__()--success

- Eliminate Cross-Browser Inconsistencies

    Browsers use different defaults
    
    Different Margins, Paddings | Different box-sizing
        
    Use **Reset-Library. (e.g. Normalize.css) | Reset Style Manually

- Polyfills
    - A **polyfill** is **JavaScript Package** which **enables certain CSS Features** in Browsers which would not support it otherwise.
    - Remember: Polyfills come at a cost! The JS has to be loaded and parsed!
    ⇒ 성능저하 문제가 있다. 잘 고려해야함.


- Support Queries

        @supports (display: grid) {
        	.container {
        		display: grid;
        	}
        }
        
실제 적용한 예제

        @supports (display: grid) {
        
          body {
            font-family: "Montserrat", sans-serif;
            margin: 0;
            display: grid;
            grid-template-rows: 3.5rem auto fit-content(8rem);
            grid-template-areas: "header"
            "main"
            "footer";
            /* padding-top: 3.5rem; */
            height: 100%;
          }
        
        }

**20.01.27**

- Vendor prefixes
=> 항상 쓰이는 property 위에 정의 되야 한다.

        .box {
        	display: -webkit-box;
        	display: -ms-flexbox;
        	display: -webkit-flex;	
        	display: flex;
        }


- CSS variables
    
1. define

        --variablename: value;



2. use

        color: var(—variablename)
        
3. basic syntax
            
       :root {
       	--dark-green: #0e4f1f;
       }
       
       button {
       	color: var(--dark-green);
       }

4. fallback
        
      :root {
      	--dark-green: #0e4f1f;
      }
      
      button {
      	color : var(--dark-green, #0e4f1f);
      }


- animation javascript event listener

        ctaButton.addEventListener("animationstart", function(event){
            console.log('Animation Started', event);
        });
        
        ctaButton.addEventListener("animationend", function(event){
          console.log('Animation Ended', event);
        });
        
        ctaButton.addEventListener("animationiteration", function(event){
          console.log('Animation Iteration', event);
        });

- multiple keyframes 
=> keyframe을 지정해줄 때 percentage로 지정해준다.
        
        @keyFrames anonymous {
        
             0% {
             
             }
             
             50% {
             
             }
             
             100% {
             
             }
            
        }
        

- keyframe

        .main-nav__item--cta {
          animation: wiggle 200ms 3s 8 alternate;
        
          /*
        
          Property Explanation
          wiggle(keyframe), how long, delay, iteration, direction(alternate, reverse)
        
          */
        }
        
        @keyframes wiggle {
            from {
              transform: rotateZ(0);
            }
            to {
              transform: rotateZ(10deg);
            }
        }
        
animation property 설명

animation: [ 애니메이션 ] , [  duration ] , [ delay ] , [ iteration ] , [ direction {alternate, reverse, forwards, backwards, none} ];

**20.01.26**

- transition

        .box {
            width: 300px;
            height: 300px;
            background: #3DCCC7;
            transition-duration: 350ms;
            transition-property: background, transform;
            /*
             transition-property: all;
             */
        }

        .box:hover {
            background: #ff6B6B;
            transform: rotate(45deg);
        }
            
=> transition-duration

=> transition-property 
이 두 가지만 사용해도 많은 애니메이션을 만들 수 있다.            
                

- element를 뒤집었을 때 visibility 설정. 예를들어 rotateX 90deg를 준 경우
        
        backface-visibility: hidden;

- transform-style: flat #preserve-3d

        transform-style: preserve-3d;
        
=> 나는 많이 쓸것 같지 않지만... 그냥 이런 것도 있다고 알기만 하자.

- perspective (value)
=> 원근감을 의미한다. 100px이면 100px만큼 멀리서 보는 것을 의미. 1000px이면 1000px만큼 멀리서 보는 것을 의미.

        transform: perspective(100px) rotateX(0deg) rotateY(80deg);
        
       
- perspective (property)
=> 원근감을 의미한다.
- perspective-origin: left (right, 100px) #pixel 단위를 주었을 때는, 오른쪽으로 움직이는 것을 의미. 
example) perspective-origin: 100px   => 오른쪽으로 100px 만큼 움직임.

           .container {
               margin: 150px auto;
               border: 1px solid black;
               width: 200px;
               height: 200px;
               perspective: 1000px;
               perspective-origin: 100px;
           }
           
           .box {
               background: red;
               width: 100%;
               height: 100%;
               transform: rotate(0deg) rotate(80deg);
               color: white;
               font-family: sans-serif;
               text-align: center;
           }

**20.01.25**
 
 - transform
 
         transform: rotateZ(45deg) translateX(3.5rem) translateY(-1rem);
         transform-origin: 25% 50%;
         
transform은 실제로 움직이는 것일 명령해준다. rotateZ(45deg) => 45도 만큼 움직여라
transform-origin, 어디서부터 움직일지 값을 정해줌.
 
 - grid-auto-rows
    
        grid-auto-rows: minmax(8rem, auto);
        grid-auto-columns: 5rem;
    
  default value : auto 보통 모든 column이나 row의 grid cell 크기가 같게 하고 싶을 때 사용한다. 
  보통 grid를 사용하다보면 child element에 따라 celle의 크기가 달라질 때가 있다. 
  grid-auto-rows 로 특정 값을 지정해주면 모두 row에게 일정한 크기를 가지게 만들 수 있다.
  grid-auto-columns 로 칼럼 cell에게 일정한 크기를 가지게 만들 수 있다.
 
- grid-auto-flow
grid 가 어떻게 화면에 출력하는지 정해줌.

        grid-auto-flow: column;   /* 모든 grid cell에 column의 형식으로 배분됨 */
        

- auto-fill (value)
row나 column에서 허용하는 만큼 row나 column의 value를 넣어준다. 
엄청나게 responsive
    
         grid-template-columns: repeat(auto-fill, 15rem);
         
- auto-fit (value)
row나 column에서 허용하는 만큼 row나 column의 value를 넣어준다.  => auto-fill과 거의 비슷함.
하지만 element를 중앙 정렬하는 것에서 다르다.

- 비스듬한 사진 태크닉
      .testimonial__image-container {
        width: 100%;
        max-width: 40rem;
        box-shadow: 3px 3px 5px 3px rgba(0,0,0,0.3);
        transform: skew(20deg);
        overflow: hidden;
      }
    
      .testimonial__image {
        width: 100%;
        vertical-align: top;
        transform: skew(-20deg) scaleX(1.4);
      }
    
    1. 이미지 container에 skew값 지정, overflow: hidden
    2. 이미지는 본래 degree값 유지하기 위해서 skew(-20deg) 지정
    3. 이미지랑 container랑 크기를 맞추기 위해 scaleX 값을 넣어준다.

**20.01.24**

** mobile first media query
        
- min-width: 40rem (데스크탑 디자인)        
                
      @media(min-width: 40rem) {} 

** desktop first media query

- max-width: 40rem (모바일 디자인)

      @media(max-width: 40rem) {}

** justify-self, align-self
- 개별 cell의 위치를 지정해준다.

** justify-items, align-items, justify-content, align-content in Grid

        justify-items: stretch;   /* it positions the item `horizontally` in their areas. */ /* Default Behavior : Stretch */
        align-items: center;      /* it positions the item `vertically` in their areas. */ /* Default Behavior : Stretch */
        justify-content: strecth /* it positions the item `horizontally` in the container(parent) */ /* Default Behavior : Stretch */
        align-content: stretch /* it positions the item `vertically` in the container(parent) */ /* Default Behavior : Stretch */ 
        
** fit content

- grid로 header, main, footer를 구분해줬을 때, footer가 아래 부분을 다 차지하지 않을 때가 있다.
- 그럴 때, fit-content를 사용하면 footer 밑에 빈공간이 사라진다.

         grid-template-rows: 3.5rem auto fit-content(8rem); /* header, main, footer의 각각의 값임. */

** footer at the bottom
웹개발을 하다보면 컨텐츠가 많이 없는 화면에 footer가 가장 밑에 안오는 것에 스트레스를 받을 때가 있다.
해결하기 위핸 전략.

1. body, html에 height을 100%를 준다.
2. grid-template-rows를 설정한다. 

        grid-template-rows: 3.5rem auto 8rem; /* header, main, footer의 각각의 값임. */
    
3. grid-template-areas로 값을 줌.    
기본적으로 -  header, main, footer 각각의 값을 줌.
grid-template-areas로 값을 지정해준다.
ex)  grid-template-areas: 'header'
                           'main'
                           'footer';
이렇게 지정해준 다음에

        .header {
            grid-area : header;
        }
        
        .main {
            grid-area : main;
        }
        
        .footer {
            grid-area : footer;
        }
    
각각 이렇게 지정해주면 끝난다.

**20.01.19**

grid는 정말 혁명이다. 이걸 얼마나 앞으로 자주 쓸지 기대가 된다.

grid-column-start
grid-column-end

grid-column : start / end 등을 배웠고

앞으로 정말 자주 쓸것 같은

grid-template-areas에 대해서 공부했다.

grid-template-areas:    

                    'header header header header'                        
                    'side side main main'                     
                    'footer footer footer footer';

이런 식으로 지정해주면 엄청 편하게 layout을 작성할 수 있다. 

기존에 있던 project 적용해서 footer를 다시 다르게 바꿔야할 것 같다.


**20.01.18** 

grid가 이해가 안되서 다시 보는 중이다. 

named lines가 잘 이해가 안된다. 어렵다.