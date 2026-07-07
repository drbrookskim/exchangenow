
## Design Tokens

### Colors
| Token | Hex | 용도 |
|---|---|---|
| `paper` | `#FCFBF6` | 카드·화면 배경 |
| `bg` | `#E9E6DD` | 전체 페이지 배경 |
| `accent` | `#0E9080` | 청록 포인트 — 버튼, 탭 활성, 좋아요 |
| `ink` | `#23211C` | 기본 텍스트 |
| `muted` | `#A09A8C` | 보조 텍스트, 아이콘 |
| `line` | `#E0DBCD` | 보더, 구분선 |
| `rail` | `#B8B2A8` | 줄기 점선, 노드 닷 |

### Typography
| Role | Font | Weight | Size |
|---|---|---|---|
| UI 전반 | `Inter`, `Noto Sans KR` | 400/500/600/700 | 11–18px |
| 로고 | `Inter`, `Noto Sans KR` | 700 | 18px |
| 메타/URL/해시 | `IBM Plex Mono` | 400/500/600 | 9.5–12px |

> 한글은 Noto Sans KR, 영어/숫자는 Inter가 자동 선택됩니다. `font-family: 'Inter', 'Noto Sans KR', sans-serif`로 설정하세요.

### Spacing & Radius
| Element | Border Radius |
|---|---|
| 카드 | 14px |
| 아바타 | 8px |
| 모바일 화면 | 18px |
| 입력 필드 | 14px |
| 설정 행, 타겟 칩 | 12px |
| 버튼(pill), 뱃지 | 100px (완전 라운드) |

### Shadows
- 카드: `box-shadow: 0 3px 12px -6px rgba(40,30,15,.18)`
- 모바일 화면 프레임: `box-shadow: 0 22px 55px -26px rgba(40,30,15,.5)`

### Dot Grid (배경)
```css
background-image: radial-gradient(circle, rgba(157,151,138,.20) 1.1px, transparent 1.1px);
background-size: 19px 19px;
```

---
