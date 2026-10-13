/**
 * <script type="application/ld+json">에 넣을 문자열을 만든다. JSON.stringify는 '<'를 그대로 두므로
 * 값에 '</script>'가 들어 있으면 스크립트 밖으로 빠져나갈 수 있다. '<'를 유니코드로 바꿔 막는다.
 */
export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}
