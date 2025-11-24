import { Bed, Footprints, Heart, Activity } from "lucide-react";
import biomarkersData from "@/data/biomarkers.json";

type BiomarkersData = {
  date: string;
  metrics?: {
    sleep?: string;
    steps?: number;
    restingHeartRate?: number;
    hrv?: number;
  };
  error?: string;
};

export default function Home() {
  // Format the steps value with commas
  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  const data = biomarkersData as BiomarkersData;

  // Check if metrics data exists
  const hasMetrics = data.metrics && Object.keys(data.metrics).length > 0;

  const allMetrics = [
    {
      id: 1,
      title: "Sleep",
      value: data.metrics?.sleep,
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
      value: data.metrics?.steps ? formatNumber(data.metrics.steps) : null,
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
      title: "Resting Heart Rate",
      value: data.metrics?.restingHeartRate ? data.metrics.restingHeartRate + " bpm" : null,
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
      value: data.metrics?.hrv ? data.metrics.hrv + " ms" : null,
      icon: Activity,
      color: "purple",
      colorClasses: {
        line: "bg-purple-500",
        iconBg: "bg-purple-100 dark:bg-purple-900/30",
        iconColor: "text-purple-600 dark:text-purple-400",
      },
    },
  ];

  // Filter out metrics that don't have values
  const metrics = allMetrics.filter(metric => metric.value !== null && metric.value !== undefined);

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
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-500">
            Last updated: {new Date(data.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>

        {/* No Data Message */}
        {metrics.length === 0 && (
          <div className="rounded-2xl border border-zinc-200/80 bg-white p-12 text-center shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900/50">
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              No data for yesterday. Tell me to charge my ring!
            </p>
          </div>
        )}

        {/* Metrics Grid */}
        {metrics.length > 0 && (
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
                  <div className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                    {metric.value}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        )}
      </div>
    </div>
  );
}
