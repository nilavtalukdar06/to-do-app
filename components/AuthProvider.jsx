"use client";
import { useState, useEffect } from "react";
import supabase from "@/utils/supabase/supabase";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

export default function AuthProvider({ children }) {
  const [session, setSession] = useState(null);
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    return () => subscription.unsubscribe();
  }, []);
  if (!session) {
    return (
      <main className="p-6 md:p-12">
        <h1 className="text-lg md:text-xl lg:text-2xl text-center font-medium text-slate-600">
          Log in to To Do App
        </h1>
        <section className="my-10 md:my-20 max-w-sm mx-auto">
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            providers={[]}
          />
        </section>
      </main>
    );
  } else {
    return <div>{children}</div>;
  }
}
