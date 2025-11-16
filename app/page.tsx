import { Bed, Footprints, Heart, Activity } from "lucide-react";

export default function Home() {
  const metrics = [
    {
      id: 1,
      title: "Sleep",
      value: "7h 45m",
      change: "+20.1%",
      changeType: "positive",
      description: "from last week",
      icon: Bed,
      color: "indigo",
      colorClasses: {
        line: "bg-indigo-500",
        iconBg: "bg-indigo-100 dark:bg-indigo-900/30",
        iconColor: "text-indigo-600 dark:text-indigo-400",
      },
    },
    {
      id: 2,
      title: "Steps",
      value: "10,523",
      change: "+23.5%",
      changeType: "positive",
      description: "from last week",
      icon: Footprints,
      color: "blue",
      colorClasses: {
        line: "bg-blue-500",
        iconBg: "bg-blue-100 dark:bg-blue-900/30",
        iconColor: "text-blue-600 dark:text-blue-400",
      },
    },
    {
      id: 3,
      title: "Heart Rate",
      value: "76 bpm",
      change: "-2.4%",
      changeType: "positive",
      description: "from last week",
      icon: Heart,
      color: "rose",
      colorClasses: {
        line: "bg-rose-500",
        iconBg: "bg-rose-100 dark:bg-rose-900/30",
        iconColor: "text-rose-600 dark:text-rose-400",
      },
    },
    {
      id: 4,
      title: "HRV",
      value: "52 ms",
      change: "-3.2%",
      changeType: "positive",
      description: "from last week",
      icon: Activity,
      color: "purple",
      colorClasses: {
        line: "bg-purple-500",
        iconBg: "bg-purple-100 dark:bg-purple-900/30",
        iconColor: "text-purple-600 dark:text-purple-400",
      },
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-zinc-50 to-stone-50 dark:from-zinc-950 dark:via-black dark:to-zinc-900">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl">
            Harry Morgan
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            My Biomarkers
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <div
                key={metric.id}
                className="group relative overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:scale-[1.02] dark:border-zinc-800/80 dark:bg-zinc-900/50"
              >
                {/* Colored accent line at top */}
                <div className={`h-1 w-full ${metric.colorClasses.line}`} />
                
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-zinc-100/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:to-zinc-800/50" />
                
                <div className="relative p-8">
                  {/* Icon */}
                  <div className={`mb-4 inline-flex items-center justify-center rounded-xl p-3 ${metric.colorClasses.iconBg}`}>
                    <Icon className={`h-6 w-6 ${metric.colorClasses.iconColor}`} />
                  </div>
                  
                  <div className="mb-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                    {metric.title}
                  </div>
                  <div className="mb-4 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                    {metric.value}
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 font-semibold ${
                        metric.changeType === "positive"
                          ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400"
                          : "bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-400"
                      }`}
                    >
                      {metric.change}
                    </span>
                    <span className="text-zinc-500 dark:text-zinc-400">
                      {metric.description}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
