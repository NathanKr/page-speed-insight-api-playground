import IStat from "@/types/i-stat";
import { PsiUrl2RootsMap } from "@/types/types";
import { mean , std} from "mathjs";

// export function getPerformanceStats(map: PsiUrl2RootsMap): Map<string, IStat> {
//   const psiUrl2StatsMap: Map<string, IStat> = new Map();

//   map.forEach((arPsiRoots, url) => {
//     const arPerformance: number[] = arPsiRoots.map(
//       (item) => item.lighthouseResult.categories.performance.score
//     );
//     const stat: IStat = {
//       avg: mean(arPerformance),
//       std: std(...arPerformance)
//     };

//     psiUrl2StatsMap.set(url, stat);
//   });

//   return psiUrl2StatsMap;
// }
