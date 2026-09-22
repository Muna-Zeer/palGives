import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { text, targetLanguage } = await request.json();

    if (!text || !targetLanguage) {
      return NextResponse.json(
        { error: 'Text and targetLanguage are required' },
        { status: 400 }
      );
    }

    // English doesn't need translation
    if (targetLanguage === 'en') {
      return NextResponse.json({
        translatedText: text,
      });
    }

    const response = await fetch(
      'http://127.0.0.1:5000/translate',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text,
          source: 'en',
          target: targetLanguage,
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();

      console.error('Argos server error:', errorText);

      return NextResponse.json(
        { error: 'Argos translation server failed' },
        { status: 500 }
      );
    }

    const data = await response.json();

    return NextResponse.json({
      translatedText: data.translatedText,
    });

  } catch (error) {
    console.error('Translation route error:', error);

    return NextResponse.json(
      { error: 'Translation failed' },
      { status: 500 }
    );
  }
}