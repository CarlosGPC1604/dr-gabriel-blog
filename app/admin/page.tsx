// app/admin/page.tsx
import ProtectedRoute from '@/components/ProtectedRoute';

export default function AdminPage() {
    return (
        <ProtectedRoute>
            <h1>Panel de administración</h1>
            {/* Contenido del panel */}
        </ProtectedRoute>
    );
}
