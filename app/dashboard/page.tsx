import DashboardSkeleton from "@/components/DashboardSkeleton";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <div className="mx-auto flex max-w-7xl gap-6 px-4 py-8 sm:px-6">
        <Sidebar />
        <main className="flex-1"> 
          <DashboardSkeleton />
        </main>
      </div>
    </div>
  );
}
