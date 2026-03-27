import StoreLayout from "@/components/store/StoreLayout";

export const metadata = {
    title: "TeczoBD - Store Dashboard",
    description: "TeczoBD - Store Dashboard",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <StoreLayout>
                {children}
            </StoreLayout>
        </>
    );
}
