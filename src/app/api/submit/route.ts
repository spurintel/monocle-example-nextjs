import { NextRequest, NextResponse } from 'next/server';
import { monocleClient } from '@spur.us/monocle-nextjs/server';

export async function POST(request: NextRequest) {
  const body = await request.json();

  const monocle = await monocleClient();

  let policyDecision;
  try {
    policyDecision = await monocle.evaluateAssessment(body.monocle);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        error: 'Failed to decrypt assessment',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 400 }
    );
  }

  return NextResponse.json({ ...policyDecision });
}
