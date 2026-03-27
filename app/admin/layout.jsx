import AdminLayout from "@/components/admin/AdminLayout";

export const metadata = {
    title: "TeczoBD - Admin",
    description: "TeczoBD - Admin",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <AdminLayout>
                {children}
            </AdminLayout>
        </>
    );
}
