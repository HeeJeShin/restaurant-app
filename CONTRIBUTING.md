# 커밋 메시지 규칙

포트폴리오로 공개되는 저장소이므로, 커밋 로그만 읽어도 "무엇을 왜 바꿨는지"가 재구성되는 것을 목표로 한다.
`git log`가 곧 개발 과정을 보여주는 문서다.

## 포맷

```
<type>(<scope>): <subject>

<body>

<footer>
```

### type (필수, 영어 소문자)

Conventional Commits 기반.

| type | 의미 |
|---|---|
| `feat` | 새 기능 추가 |
| `fix` | 버그 수정 |
| `refactor` | 동작 변화 없는 구조 개선 |
| `style` | 포맷팅, 세미콜론 등 (로직 변화 없음) |
| `docs` | 문서만 변경 |
| `test` | 테스트 추가/수정 |
| `chore` | 빌드/설정/의존성 등 잡무성 변경 |
| `perf` | 성능 개선 |

### scope (선택, 영어)

변경이 속한 영역. 예: `navigation`, `auth`, `reservation`, `waiting`, `mypage`, `stores`, `queries`, `native`, `config`

### subject (필수)

- 영어, 명령형("add", "fix" — "added", "fixes" 금지), 마침표 없음, 50자 이내
- 예: `feat(navigation): add bottom tab shell for main flows`

### body (필수 — 한 줄짜리 사소한 변경 제외)

- 한글로 작성 가능 (영어 subject와 달리 body는 상세 설명이 목적)
- **무엇을 바꿨는지가 아니라 왜 그렇게 했는지**를 우선 설명 (코드 diff가 이미 "무엇"은 보여줌)
- 여러 항목이면 `-` 불릿으로 나열
- 트레이드오프나 대안을 검토했다면 그것도 기록 (포트폴리오 리뷰어가 의사결정 과정을 볼 수 있도록)

### footer (선택)

- `Refs: Stage N` — 프로젝트 로드맵 단계(1: 예약+로그인+푸시, 2: 결제+QR, 3: 실시간 웨이팅+WebView 브릿지) 표기
- `Breaking:` — 하위 호환을 깨는 변경일 때

## 예시

```
feat(navigation): 홈/예약/웨이팅/마이페이지 탭 골격 구성

React Navigation의 bottom-tabs + native-stack 조합으로 각 탭마다 독립된
스택을 둠. 이후 단계(결제, QR, 실시간 웨이팅)에서 화면이 늘어나도
탭 간 네비게이션 구조를 건드리지 않고 각 스택 안에서만 확장 가능하도록
설계.

로그인 화면은 마이페이지 스택 안에 배치 — 별도 인증 스택으로 분리하는
대신 마이페이지에서 진입하는 흐름을 택함 (부트캠프 원본 앱의 UX를 따름).

Refs: Stage 1
```

## 기타 규칙

- 커밋은 논리적으로 하나의 단위로 나눈다 (기능 A + 무관한 리팩터링 B를 한 커밋에 섞지 않음)
- WIP/temp 같은 커밋은 남기지 않는다 (필요하면 `git commit --amend`나 인터랙티브 리베이스로 정리 후 푸시)
