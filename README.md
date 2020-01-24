# CSS_COMPLETE_GUIDE
I was always annoyed when I was using CSS. Let's overcome it!

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