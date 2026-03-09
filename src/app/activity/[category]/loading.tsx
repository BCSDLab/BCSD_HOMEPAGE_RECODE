function ActivityCardSkeleton({ keyName }: { keyName: string }) {
  return (
    <div key={keyName} className="flex justify-between gap-5">
      <div className="w-80">
        <div className="h-6 w-24 rounded-full bg-[#ececec]" />
        <div className="mt-4 h-8 w-64 rounded-full bg-[#ececec]" />
        <div className="mt-4 h-5 w-72 rounded-full bg-[#f4f4f4]" />
        <div className="mt-2 h-5 w-56 rounded-full bg-[#f4f4f4]" />
      </div>
      <div aria-hidden="true" className="h-96.5 w-171.5 shrink-0 rounded-xl bg-[#f4f4f4]" />
    </div>
  );
}

export default function ActivityCategoryLoading() {
  return (
    <main className="hide-scrollbar w-full overflow-x-auto">
      <div className="min-w-360">
        <header className="relative aspect-1440/587 w-full animate-pulse bg-[#f4f4f4]" />

        <div className="mt-20 mb-30 px-50">
          <div className="flex justify-between">
            <div className="flex gap-6">
              <div className="h-11 w-40 rounded-full bg-[#ececec]" />
              <div className="h-11 w-40 rounded-full bg-[#f4f4f4]" />
              <div className="h-11 w-40 rounded-full bg-[#f4f4f4]" />
            </div>
            <div className="h-11 w-61 rounded-full bg-[#f4f4f4]" />
          </div>

          <div className="mt-36 flex flex-col gap-13">
            <ActivityCardSkeleton keyName="loading-card-1" />
            <ActivityCardSkeleton keyName="loading-card-2" />
          </div>
        </div>
      </div>
    </main>
  );
}
