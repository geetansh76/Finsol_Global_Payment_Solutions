// app/providers.jsx
'use client';
import { useEffect } from 'react';

export default function Providers({ children }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);
  return <>{children}</>;
}
