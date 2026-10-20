function ActivityCardSkeleton({ keyName }: { keyName: string }) {
  return (
    <div key={keyName} className="flex flex-col-reverse gap-4 lg:flex-row lg:justify-between lg:gap-5">
      <div className="w-full lg:w-80">
        <div className="h-6 w-24 rounded-full bg-[#ececec]" />
        <div className="mt-4 h-8 w-4/5 rounded-full bg-[#ececec] lg:w-64" />
        <div className="mt-4 h-5 w-full rounded-full bg-[#f4f4f4] lg:w-72" />
        <div className="mt-2 h-5 w-3/4 rounded-full bg-[#f4f4f4] lg:w-56" />
      </div>
      <div
        aria-hidden="true"
        className="aspect-686/386 w-full shrink-0 rounded-xl bg-[#f4f4f4] lg:aspect-auto lg:h-96.5 lg:w-171.5"
      />
    </div>
  );
}

export default function ActivityCategoryLoading() {
  return (
    <main className="lg:hide-scrollbar w-full lg:overflow-x-auto">
      <div className="lg:min-w-360">
        <header className="relative h-60 w-full animate-pulse bg-[#f4f4f4] md:h-80 lg:aspect-1440/587 lg:h-auto" />

        <div className="mt-12 mb-20 px-6 lg:mt-20 lg:mb-30 lg:px-50">
          <div className="flex items-center gap-3 lg:items-stretch lg:justify-between lg:gap-0">
            <div className="flex min-w-0 flex-1 gap-2 overflow-hidden lg:flex-initial lg:gap-6 lg:overflow-visible">
              <div className="h-10 w-24 shrink-0 rounded-full bg-[#ececec] lg:h-11 lg:w-40" />
              <div className="h-10 w-24 shrink-0 rounded-full bg-[#f4f4f4] lg:h-11 lg:w-40" />
              <div className="h-10 w-24 shrink-0 rounded-full bg-[#f4f4f4] lg:h-11 lg:w-40" />
            </div>
            <div className="h-10 w-28 shrink-0 rounded-full bg-[#f4f4f4] lg:h-11 lg:w-61" />
          </div>

          <div className="mt-12 flex flex-col gap-13 lg:mt-36">
            <ActivityCardSkeleton keyName="loading-card-1" />
            <ActivityCardSkeleton keyName="loading-card-2" />
          </div>
        </div>
      </div>
    </main>
  );
}
