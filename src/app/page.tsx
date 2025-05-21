'use client';

import { useMonocle } from '@spur.us/monocle-nextjs';
import { useState } from 'react';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Field, Fieldset, Label } from '@/components/ui/fieldset';
import { Card } from '@/components/ui/card';

export default function Home() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [policyDecision, setPolicyDecision] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const { assessment, isLoading } = useMonocle();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      email: formData.get('email'),
      password: formData.get('password'),
      monocle: assessment,
    };

    const res = await fetch('/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const errorData = await res.json();
      setError(errorData.message || 'Failed to submit form');
      return;
    }

    const resData = await res.json();
    setPolicyDecision(resData);
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-purple-300 border-t-transparent"></div>
        <p className="mt-4 text-purple-300 font-mono">Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center w-full gap-6">
      <Image
        src="/logo.png"
        alt="Monocle"
        quality={100}
        height={131}
        width={1054}
        className="h-10 w-auto"
      />
      {policyDecision ? (
        <Card className="w-full max-w-[472px] flex flex-col gap-6">
          <Assessment assessment={JSON.stringify(policyDecision, null, 2)} />
          <Button className="w-full" onClick={() => setPolicyDecision(null)}>
            Reset
          </Button>
        </Card>
      ) : (
        <Card className="w-full max-w-sm">
          <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
            <Fieldset>
              <input type="hidden" name="monocle" value={assessment} />
              <Field>
                <Label>Email</Label>
                <Input type="email" name="email" />
              </Field>
              <Field>
                <Label>Password</Label>
                <Input type="password" name="password" />
              </Field>
              {error && <div className="text-red-500 text-sm">{error}</div>}
              <Button className="w-full" type="submit">
                Submit
              </Button>
            </Fieldset>
          </form>
        </Card>
      )}
    </div>
  );
}

function Assessment({ assessment }: { assessment: string }) {
  const formattedJson = JSON.stringify(JSON.parse(assessment), null, 2)
    .replace(/"([^"]+)":/g, '<span class="text-white">"$1":</span>')
    .replace(/[{}[\],]/g, '<span class="text-white">$&</span>');

  return (
    <div className="overflow-x-hidden">
      <pre
        className="text-sm rounded-lg  text-purple-300"
        dangerouslySetInnerHTML={{ __html: formattedJson }}
      />
    </div>
  );
}
