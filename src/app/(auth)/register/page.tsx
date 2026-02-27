import RegisterForm from '@/components/features/auth/register-form';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Register'
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="grid gap-6 max-w-xl mx-auto p-4">
        {/* Back button */}
        <div className="-mx-4">
          <Button variant="ghost" className="rounded-full size-10" asChild>
            <Link href="/login">
              <ChevronLeft />
            </Link>
          </Button>
        </div>

        {/* Meta logo */}
        <Image alt="Meta" src="/meta.svg" width={60} height={12} />

        {/* Title */}
        <div>
          <h1 className="text-2xl font-semibold">Get started on Facebook</h1>
          <p className="text-sm text-muted-foreground">
            Create an account to connect with friends, family and communities of
            people who share your interests.
          </p>
        </div>

        {/* Register form */}
        <RegisterForm />

        {/* Already have account button */}
        <Button variant="outline" className="rounded-full" asChild>
          <Link href="/login">I already have an account</Link>
        </Button>
      </div>
    </div>
  );
}
