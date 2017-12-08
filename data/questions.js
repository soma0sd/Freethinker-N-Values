/*
 *   질문과 각 가치관 가중치를 입력합니다.
 *
 *   가령 "나는 아직 젋다"에 대해 4개의 가치관 A, B, C, D의 가중치가
 *   [10, 0, 2, 0]일 때, "매우 동의"을 누르면 가치관 수치에 그대로 반영하며,
 *   동의를 누르면 절반씩 감소한 값인 [5, 0, 1, 0]이 반영됩니다. 중립/모름의
 *  경우, 가중치가 모두 0이며 반대를 누른 경우 절반씩 감한 값 [-5, 0, -1, 0]을
 *  적용합니다. 매우 반대를 누르면 가치관 수치에서 [-10, 0, -2, 0]을 적용합니다.
 *
 *  중요: 가치관의 수와 "effect"배열의 크기는 동일해야 합니다.
 */
 questions = [
     {
         "question": "나는 만쥐작이 너무 좋다",
         "effect": [10, 5, 0, 0]
     },
     {
         "question": "뚜껑을 따는 일은 항상 즐겁다",
         "effect": [10, 0, 5, 0]
     },
     {
         "question": "나는 예쁘다",
         "effect": [0, 10, 0, 0]
     },
     {
         "question": "나는 귀엽다",
         "effect": [0, 10, 10, 0]
     },
     {
         "question": "필수 3대 영양소인 니코틴, 알코올, 카페인 중 알코올이 최고다",
         "effect": [3, 0, 0, 10]
     }
 ];