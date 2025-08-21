import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 });
  }

  const apiKey = process.env.ZEROBOUNCE_API_KEY;

  if (!apiKey) {
    console.error('ZeroBounce API key is not configured.');
    // 사용자에게는 일반적인 오류 메시지를 보여줍니다.
    return NextResponse.json({ error: 'Configuration error' }, { status: 500 });
  }

  // IP 주소는 선택 사항이며, 사기 방지 점수를 높이는 데 도움이 될 수 있습니다.
  const ipAddress = '';

  try {
    const apiResponse = await fetch(
      `https://api.zerobounce.net/v2/validate?api_key=${apiKey}&email=${encodeURIComponent(
        email as string
      )}&ip_address=${encodeURIComponent(ipAddress)}`,
      {
        method: 'GET',
      }
    );

    if (!apiResponse.ok) {
      // API에서 오류 응답을 받은 경우
      const errorData = await apiResponse.json();
      console.error('ZeroBounce API error:', errorData);
      return NextResponse.json(
        { error: 'Failed to verify email' },
        { status: apiResponse.status }
      );
    }

    const data = await apiResponse.json();

    // 클라이언트에게 검증 상태와 서브 상태를 전달합니다.
    return NextResponse.json({ status: data.status, sub_status: data.sub_status });

  } catch (error) {
    console.error('Error connecting to ZeroBounce API:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
