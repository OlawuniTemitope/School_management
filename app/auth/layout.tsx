
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex bg-slate-600">
          <div className='w-full flex-1 flex items-center 
    justify-center align-middle mt-[2%]'>
    <div className='w-[65%] md:w-[50%]'>
      {/* LEFT */}
        {children}
    </div>
    </div>
    </div>
  );
}
