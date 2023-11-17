export interface Root {
    data: Data
  }
  
  export interface Data {
    captchaResult: string
    kind: string
    id: string
    loadingExperience: LoadingExperience
    originLoadingExperience: OriginLoadingExperience
    lighthouseResult: LighthouseResult
    analysisUTCTimestamp: string
  }
  
  export interface LoadingExperience {
    id: string
    metrics: Metrics
    overall_category: string
    initial_url: string
  }
  
  export interface Metrics {
    CUMULATIVE_LAYOUT_SHIFT_SCORE: CumulativeLayoutShiftScore
    EXPERIMENTAL_TIME_TO_FIRST_BYTE: ExperimentalTimeToFirstByte
    FIRST_CONTENTFUL_PAINT_MS: FirstContentfulPaintMs
    FIRST_INPUT_DELAY_MS: FirstInputDelayMs
    INTERACTION_TO_NEXT_PAINT: InteractionToNextPaint
    LARGEST_CONTENTFUL_PAINT_MS: LargestContentfulPaintMs
  }
  
  export interface CumulativeLayoutShiftScore {
    percentile: number
    distributions: Distribution[]
    category: string
  }
  
  export interface Distribution {
    min: number
    max?: number
    proportion: number
  }
  
  export interface ExperimentalTimeToFirstByte {
    percentile: number
    distributions: Distribution2[]
    category: string
  }
  
  export interface Distribution2 {
    min: number
    max?: number
    proportion: number
  }
  
  export interface FirstContentfulPaintMs {
    percentile: number
    distributions: Distribution3[]
    category: string
  }
  
  export interface Distribution3 {
    min: number
    max?: number
    proportion: number
  }
  
  export interface FirstInputDelayMs {
    percentile: number
    distributions: Distribution4[]
    category: string
  }
  
  export interface Distribution4 {
    min: number
    max?: number
    proportion: number
  }
  
  export interface InteractionToNextPaint {
    percentile: number
    distributions: Distribution5[]
    category: string
  }
  
  export interface Distribution5 {
    min: number
    max?: number
    proportion: number
  }
  
  export interface LargestContentfulPaintMs {
    percentile: number
    distributions: Distribution6[]
    category: string
  }
  
  export interface Distribution6 {
    min: number
    max?: number
    proportion: number
  }
  
  export interface OriginLoadingExperience {
    id: string
    metrics: Metrics2
    overall_category: string
    initial_url: string
  }
  
  export interface Metrics2 {
    CUMULATIVE_LAYOUT_SHIFT_SCORE: CumulativeLayoutShiftScore2
    EXPERIMENTAL_TIME_TO_FIRST_BYTE: ExperimentalTimeToFirstByte2
    FIRST_CONTENTFUL_PAINT_MS: FirstContentfulPaintMs2
    FIRST_INPUT_DELAY_MS: FirstInputDelayMs2
    INTERACTION_TO_NEXT_PAINT: InteractionToNextPaint2
    LARGEST_CONTENTFUL_PAINT_MS: LargestContentfulPaintMs2
  }
  
  export interface CumulativeLayoutShiftScore2 {
    percentile: number
    distributions: Distribution7[]
    category: string
  }
  
  export interface Distribution7 {
    min: number
    max?: number
    proportion: number
  }
  
  export interface ExperimentalTimeToFirstByte2 {
    percentile: number
    distributions: Distribution8[]
    category: string
  }
  
  export interface Distribution8 {
    min: number
    max?: number
    proportion: number
  }
  
  export interface FirstContentfulPaintMs2 {
    percentile: number
    distributions: Distribution9[]
    category: string
  }
  
  export interface Distribution9 {
    min: number
    max?: number
    proportion: number
  }
  
  export interface FirstInputDelayMs2 {
    percentile: number
    distributions: Distribution10[]
    category: string
  }
  
  export interface Distribution10 {
    min: number
    max?: number
    proportion: number
  }
  
  export interface InteractionToNextPaint2 {
    percentile: number
    distributions: Distribution11[]
    category: string
  }
  
  export interface Distribution11 {
    min: number
    max?: number
    proportion: number
  }
  
  export interface LargestContentfulPaintMs2 {
    percentile: number
    distributions: Distribution12[]
    category: string
  }
  
  export interface Distribution12 {
    min: number
    max?: number
    proportion: number
  }
  
  export interface LighthouseResult {
    requestedUrl: string
    finalUrl: string
    mainDocumentUrl: string
    finalDisplayedUrl: string
    lighthouseVersion: string
    userAgent: string
    fetchTime: string
    environment: Environment
    runWarnings: any[]
    configSettings: ConfigSettings
    audits: Audits
    categories: Categories
    categoryGroups: CategoryGroups
    timing: Timing
    i18n: I18n
    entities: Entity[]
    fullPageScreenshot: FullPageScreenshot
  }
  
  export interface Environment {
    networkUserAgent: string
    hostUserAgent: string
    benchmarkIndex: number
  }
  
  export interface ConfigSettings {
    emulatedFormFactor: string
    formFactor: string
    locale: string
    onlyCategories: string[]
    channel: string
  }
  
  export interface Audits {
    "largest-contentful-paint-element": LargestContentfulPaintElement
    "uses-text-compression": UsesTextCompression
    "long-tasks": LongTasks
    "mainthread-work-breakdown": MainthreadWorkBreakdown
    "non-composited-animations": NonCompositedAnimations
    "first-meaningful-paint": FirstMeaningfulPaint
    "unsized-images": UnsizedImages
    "script-treemap-data": ScriptTreemapData
    "font-display": FontDisplay
    "network-server-latency": NetworkServerLatency
    viewport: Viewport
    "uses-passive-event-listeners": UsesPassiveEventListeners
    "unminified-css": UnminifiedCss
    "third-party-summary": ThirdPartySummary
    "unused-css-rules": UnusedCssRules
    "bootup-time": BootupTime
    "uses-rel-preload": UsesRelPreload
    "largest-contentful-paint": LargestContentfulPaint
    "layout-shift-elements": LayoutShiftElements
    "speed-index": SpeedIndex
    "dom-size": DomSize
    "first-contentful-paint": FirstContentfulPaint
    "render-blocking-resources": RenderBlockingResources
    "efficient-animated-content": EfficientAnimatedContent
    redirects: Redirects
    "uses-long-cache-ttl": UsesLongCacheTtl
    "modern-image-formats": ModernImageFormats
    "uses-responsive-images": UsesResponsiveImages
    "third-party-facades": ThirdPartyFacades
    "total-byte-weight": TotalByteWeight
    "server-response-time": ServerResponseTime
    "total-blocking-time": TotalBlockingTime
    "performance-budget": PerformanceBudget
    "uses-optimized-images": UsesOptimizedImages
    "unused-javascript": UnusedJavascript
    "main-thread-tasks": MainThreadTasks
    "timing-budget": TimingBudget
    "lcp-lazy-loaded": LcpLazyLoaded
    "cumulative-layout-shift": CumulativeLayoutShift
    "duplicated-javascript": DuplicatedJavascript
    interactive: Interactive
    "legacy-javascript": LegacyJavascript
    "unminified-javascript": UnminifiedJavascript
    "uses-rel-preconnect": UsesRelPreconnect
    "no-document-write": NoDocumentWrite
    diagnostics: Diagnostics
    "critical-request-chains": CriticalRequestChains
    "offscreen-images": OffscreenImages
    "max-potential-fid": MaxPotentialFid
    "user-timings": UserTimings
    "screenshot-thumbnails": ScreenshotThumbnails
    "network-requests": NetworkRequests
    "network-rtt": NetworkRtt
    "final-screenshot": FinalScreenshot
    "prioritize-lcp-image": PrioritizeLcpImage
    metrics: Metrics3
  }
  
  export interface LargestContentfulPaintElement {
    id: string
    title: string
    description: string
    score: any
    scoreDisplayMode: string
    displayValue: string
    details: Details
  }
  
  export interface Details {
    items: Item[]
    type: string
  }
  
  export interface Item {
    type: string
    headings: Heading[]
    items: Item2[]
  }
  
  export interface Heading {
    label: string
    key: string
    valueType: string
  }
  
  export interface Item2 {
    node?: Node
    percent?: string
    phase?: string
    timing?: number
  }
  
  export interface Node {
    path: string
    lhId: string
    type: string
    boundingRect: BoundingRect
    snippet: string
    selector: string
    nodeLabel: string
  }
  
  export interface BoundingRect {
    height: number
    right: number
    width: number
    left: number
    top: number
    bottom: number
  }
  
  export interface UsesTextCompression {
    id: string
    title: string
    description: string
    score: number
    scoreDisplayMode: string
    details: Details2
    numericValue: number
    numericUnit: string
  }
  
  export interface Details2 {
    overallSavingsMs: number
    headings: any[]
    debugData: DebugData
    items: any[]
    overallSavingsBytes: number
    type: string
    sortedBy: string[]
  }
  
  export interface DebugData {
    type: string
    metricSavings: MetricSavings
  }
  
  export interface MetricSavings {
    LCP: number
    FCP: number
  }
  
  export interface LongTasks {
    id: string
    title: string
    description: string
    score: any
    scoreDisplayMode: string
    displayValue: string
    details: Details3
  }
  
  export interface Details3 {
    type: string
    items: Item3[]
    sortedBy: string[]
    debugData: DebugData2
    headings: Heading2[]
    skipSumming: string[]
  }
  
  export interface Item3 {
    url: string
    startTime: number
    duration: number
  }
  
  export interface DebugData2 {
    tasks: Task[]
    type: string
    urls: string[]
  }
  
  export interface Task {
    startTime: number
    duration: number
    scriptEvaluation: number
    other: number
    urlIndex: number
  }
  
  export interface Heading2 {
    key: string
    valueType: string
    label: string
    granularity?: number
  }
  
  export interface MainthreadWorkBreakdown {
    id: string
    title: string
    description: string
    score: number
    scoreDisplayMode: string
    displayValue: string
    details: Details4
    numericValue: number
    numericUnit: string
  }
  
  export interface Details4 {
    sortedBy: string[]
    type: string
    items: Item4[]
    headings: Heading3[]
  }
  
  export interface Item4 {
    group: string
    duration: number
    groupLabel: string
  }
  
  export interface Heading3 {
    valueType: string
    label: string
    key: string
    granularity?: number
  }
  
  export interface NonCompositedAnimations {
    id: string
    title: string
    description: string
    score: any
    scoreDisplayMode: string
    details: Details5
  }
  
  export interface Details5 {
    headings: any[]
    items: any[]
    type: string
  }
  
  export interface FirstMeaningfulPaint {
    id: string
    title: string
    description: string
    score: number
    scoreDisplayMode: string
    displayValue: string
    numericValue: number
    numericUnit: string
  }
  
  export interface UnsizedImages {
    id: string
    title: string
    description: string
    score: number
    scoreDisplayMode: string
    details: Details6
  }
  
  export interface Details6 {
    items: Item5[]
    headings: Heading4[]
    type: string
  }
  
  export interface Item5 {
    url: string
    node: Node2
  }
  
  export interface Node2 {
    boundingRect: BoundingRect2
    lhId: string
    nodeLabel: string
    type: string
    snippet: string
    selector: string
    path: string
  }
  
  export interface BoundingRect2 {
    height: number
    top: number
    width: number
    bottom: number
    left: number
    right: number
  }
  
  export interface Heading4 {
    key: string
    valueType: string
    label?: string
  }
  
  export interface ScriptTreemapData {
    id: string
    title: string
    description: string
    score: any
    scoreDisplayMode: string
    details: Details7
  }
  
  export interface Details7 {
    nodes: Node3[]
    type: string
  }
  
  export interface Node3 {
    children?: Children[]
    name: string
    resourceBytes: number
    unusedBytes?: number
  }
  
  export interface Children {
    unusedBytes: number
    name: string
    resourceBytes: number
  }
  
  export interface FontDisplay {
    id: string
    title: string
    description: string
    score: number
    scoreDisplayMode: string
    details: Details8
    warnings: any[]
  }
  
  export interface Details8 {
    headings: any[]
    items: any[]
    type: string
  }
  
  export interface NetworkServerLatency {
    id: string
    title: string
    description: string
    score: any
    scoreDisplayMode: string
    displayValue: string
    details: Details9
    numericValue: number
    numericUnit: string
  }
  
  export interface Details9 {
    items: Item6[]
    headings: Heading5[]
    sortedBy: string[]
    type: string
  }
  
  export interface Item6 {
    origin: string
    serverResponseTime: number
  }
  
  export interface Heading5 {
    label: string
    valueType: string
    key: string
    granularity?: number
  }
  
  export interface Viewport {
    id: string
    title: string
    description: string
    score: number
    scoreDisplayMode: string
    warnings: any[]
  }
  
  export interface UsesPassiveEventListeners {
    id: string
    title: string
    description: string
    score: number
    scoreDisplayMode: string
    details: Details10
  }
  
  export interface Details10 {
    type: string
    items: any[]
    headings: any[]
  }
  
  export interface UnminifiedCss {
    id: string
    title: string
    description: string
    score: number
    scoreDisplayMode: string
    details: Details11
    numericValue: number
    numericUnit: string
  }
  
  export interface Details11 {
    overallSavingsBytes: number
    debugData: DebugData3
    items: any[]
    overallSavingsMs: number
    headings: any[]
    type: string
    sortedBy: string[]
  }
  
  export interface DebugData3 {
    type: string
    metricSavings: MetricSavings2
  }
  
  export interface MetricSavings2 {
    FCP: number
    LCP: number
  }
  
  export interface ThirdPartySummary {
    id: string
    title: string
    description: string
    score: number
    scoreDisplayMode: string
    displayValue: string
    details: Details12
  }
  
  export interface Details12 {
    summary: Summary
    items: Item7[]
    headings: Heading6[]
    isEntityGrouped: boolean
    type: string
  }
  
  export interface Summary {
    wastedBytes: number
    wastedMs: number
  }
  
  export interface Item7 {
    mainThreadTime: number
    subItems: SubItems
    blockingTime: number
    entity: string
    transferSize: number
  }
  
  export interface SubItems {
    items: Item8[]
    type: string
  }
  
  export interface Item8 {
    blockingTime: number
    url: string
    transferSize: number
    mainThreadTime?: number
  }
  
  export interface Heading6 {
    label: string
    key: string
    valueType: string
    subItemsHeading: SubItemsHeading
    granularity?: number
  }
  
  export interface SubItemsHeading {
    valueType?: string
    key: string
  }
  
  export interface UnusedCssRules {
    id: string
    title: string
    description: string
    score: number
    scoreDisplayMode: string
    displayValue: string
    details: Details13
    numericValue: number
    numericUnit: string
  }
  
  export interface Details13 {
    overallSavingsMs: number
    sortedBy: string[]
    headings: Heading7[]
    items: Item9[]
    debugData: DebugData4
    type: string
    overallSavingsBytes: number
  }
  
  export interface Heading7 {
    valueType: string
    key: string
    label: string
  }
  
  export interface Item9 {
    wastedBytes: number
    url: string
    wastedPercent: number
    totalBytes: number
  }
  
  export interface DebugData4 {
    type: string
    metricSavings: MetricSavings3
  }
  
  export interface MetricSavings3 {
    FCP: number
    LCP: number
  }
  
  export interface BootupTime {
    id: string
    title: string
    description: string
    score: number
    scoreDisplayMode: string
    displayValue: string
    details: Details14
    numericValue: number
    numericUnit: string
  }
  
  export interface Details14 {
    type: string
    items: Item10[]
    summary: Summary2
    sortedBy: string[]
    headings: Heading8[]
  }
  
  export interface Item10 {
    url: string
    total: number
    scriptParseCompile: number
    scripting: number
  }
  
  export interface Summary2 {
    wastedMs: number
  }
  
  export interface Heading8 {
    valueType: string
    key: string
    label: string
    granularity?: number
  }
  
  export interface UsesRelPreload {
    id: string
    title: string
    description: string
    score: any
    scoreDisplayMode: string
    details: Details15
  }
  
  export interface Details15 {
    type: string
    items: any[]
    headings: any[]
    overallSavingsMs: number
  }
  
  export interface LargestContentfulPaint {
    id: string
    title: string
    description: string
    score: number
    scoreDisplayMode: string
    displayValue: string
    numericValue: number
    numericUnit: string
  }
  
  export interface LayoutShiftElements {
    id: string
    title: string
    description: string
    score: any
    scoreDisplayMode: string
    displayValue: string
    details: Details16
  }
  
  export interface Details16 {
    headings: Heading9[]
    items: Item11[]
    type: string
  }
  
  export interface Heading9 {
    valueType: string
    label: string
    key: string
    granularity?: number
  }
  
  export interface Item11 {
    score: number
    node: Node4
  }
  
  export interface Node4 {
    lhId: string
    boundingRect: BoundingRect3
    selector: string
    snippet: string
    nodeLabel: string
    type: string
    path: string
  }
  
  export interface BoundingRect3 {
    right: number
    bottom: number
    width: number
    height: number
    top: number
    left: number
  }
  
  export interface SpeedIndex {
    id: string
    title: string
    description: string
    score: number
    scoreDisplayMode: string
    displayValue: string
    numericValue: number
    numericUnit: string
  }
  
  export interface DomSize {
    id: string
    title: string
    description: string
    score: number
    scoreDisplayMode: string
    displayValue: string
    details: Details17
    numericValue: number
    numericUnit: string
  }
  
  export interface Details17 {
    headings: Heading10[]
    items: Item12[]
    type: string
  }
  
  export interface Heading10 {
    key: string
    label: string
    valueType: string
  }
  
  export interface Item12 {
    value: Value
    statistic: string
    node?: Node5
  }
  
  export interface Value {
    type: string
    value: number
    granularity: number
  }
  
  export interface Node5 {
    snippet: string
    selector: string
    boundingRect: BoundingRect4
    lhId: string
    type: string
    path: string
    nodeLabel: string
  }
  
  export interface BoundingRect4 {
    top: number
    bottom: number
    height: number
    width: number
    left: number
    right: number
  }
  
  export interface FirstContentfulPaint {
    id: string
    title: string
    description: string
    score: number
    scoreDisplayMode: string
    displayValue: string
    numericValue: number
    numericUnit: string
  }
  
  export interface RenderBlockingResources {
    id: string
    title: string
    description: string
    score: number
    scoreDisplayMode: string
    displayValue: string
    details: Details18
    numericValue: number
    numericUnit: string
  }
  
  export interface Details18 {
    items: Item13[]
    overallSavingsMs: number
    headings: Heading11[]
    type: string
  }
  
  export interface Item13 {
    url: string
    totalBytes: number
    wastedMs: number
  }
  
  export interface Heading11 {
    valueType: string
    label: string
    key: string
  }
  
  export interface EfficientAnimatedContent {
    id: string
    title: string
    description: string
    score: number
    scoreDisplayMode: string
    details: Details19
    numericValue: number
    numericUnit: string
  }
  
  export interface Details19 {
    debugData: DebugData5
    headings: any[]
    overallSavingsMs: number
    overallSavingsBytes: number
    items: any[]
    type: string
    sortedBy: string[]
  }
  
  export interface DebugData5 {
    type: string
    metricSavings: MetricSavings4
  }
  
  export interface MetricSavings4 {
    LCP: number
    FCP: number
  }
  
  export interface Redirects {
    id: string
    title: string
    description: string
    score: number
    scoreDisplayMode: string
    details: Details20
    numericValue: number
    numericUnit: string
  }
  
  export interface Details20 {
    headings: any[]
    type: string
    overallSavingsMs: number
    items: any[]
  }
  
  export interface UsesLongCacheTtl {
    id: string
    title: string
    description: string
    score: number
    scoreDisplayMode: string
    displayValue: string
    details: Details21
    numericValue: number
    numericUnit: string
  }
  
  export interface Details21 {
    type: string
    sortedBy: string[]
    headings: Heading12[]
    skipSumming: string[]
    summary: Summary3
    items: Item14[]
  }
  
  export interface Heading12 {
    key: string
    label: string
    valueType: string
    displayUnit?: string
    granularity?: number
  }
  
  export interface Summary3 {
    wastedBytes: number
  }
  
  export interface Item14 {
    totalBytes: number
    debugData: DebugData6
    url: string
    cacheLifetimeMs: number
    wastedBytes: number
    cacheHitProbability: number
  }
  
  export interface DebugData6 {
    type: string
    public: boolean
    "max-age": number
  }
  
  export interface ModernImageFormats {
    id: string
    title: string
    description: string
    score: number
    scoreDisplayMode: string
    displayValue: string
    details: Details22
    warnings: any[]
    numericValue: number
    numericUnit: string
  }
  
  export interface Details22 {
    items: Item15[]
    sortedBy: string[]
    debugData: DebugData7
    type: string
    overallSavingsMs: number
    headings: Heading13[]
    overallSavingsBytes: number
  }
  
  export interface Item15 {
    totalBytes: number
    url: string
    fromProtocol: boolean
    isCrossOrigin: boolean
    wastedWebpBytes: number
    node: Node6
    wastedBytes: number
  }
  
  export interface Node6 {
    lhId: string
    snippet: string
    path: string
    type: string
    nodeLabel: string
    selector: string
    boundingRect: BoundingRect5
  }
  
  export interface BoundingRect5 {
    width: number
    bottom: number
    top: number
    height: number
    right: number
    left: number
  }
  
  export interface DebugData7 {
    metricSavings: MetricSavings5
    type: string
  }
  
  export interface MetricSavings5 {
    FCP: number
    LCP: number
  }
  
  export interface Heading13 {
    valueType: string
    key: string
    label?: string
  }
  
  export interface UsesResponsiveImages {
    id: string
    title: string
    description: string
    score: number
    scoreDisplayMode: string
    displayValue: string
    details: Details23
    numericValue: number
    numericUnit: string
  }
  
  export interface Details23 {
    debugData: DebugData8
    overallSavingsMs: number
    headings: Heading14[]
    overallSavingsBytes: number
    type: string
    items: Item16[]
    sortedBy: string[]
  }
  
  export interface DebugData8 {
    metricSavings: MetricSavings6
    type: string
  }
  
  export interface MetricSavings6 {
    FCP: number
    LCP: number
  }
  
  export interface Heading14 {
    key: string
    valueType: string
    label?: string
  }
  
  export interface Item16 {
    node: Node7
    wastedBytes: number
    url: string
    totalBytes: number
    wastedPercent: number
  }
  
  export interface Node7 {
    nodeLabel: string
    path: string
    type: string
    lhId: string
    snippet: string
    boundingRect: BoundingRect6
    selector: string
  }
  
  export interface BoundingRect6 {
    right: number
    bottom: number
    top: number
    height: number
    left: number
    width: number
  }
  
  export interface ThirdPartyFacades {
    id: string
    title: string
    description: string
    score: any
    scoreDisplayMode: string
  }
  
  export interface TotalByteWeight {
    id: string
    title: string
    description: string
    score: number
    scoreDisplayMode: string
    displayValue: string
    details: Details24
    numericValue: number
    numericUnit: string
  }
  
  export interface Details24 {
    type: string
    items: Item17[]
    headings: Heading15[]
    sortedBy: string[]
  }
  
  export interface Item17 {
    url: string
    totalBytes: number
  }
  
  export interface Heading15 {
    valueType: string
    key: string
    label: string
  }
  
  export interface ServerResponseTime {
    id: string
    title: string
    description: string
    score: number
    scoreDisplayMode: string
    displayValue: string
    details: Details25
    numericValue: number
    numericUnit: string
  }
  
  export interface Details25 {
    overallSavingsMs: number
    items: Item18[]
    headings: Heading16[]
    type: string
  }
  
  export interface Item18 {
    url: string
    responseTime: number
  }
  
  export interface Heading16 {
    label: string
    valueType: string
    key: string
  }
  
  export interface TotalBlockingTime {
    id: string
    title: string
    description: string
    score: number
    scoreDisplayMode: string
    displayValue: string
    numericValue: number
    numericUnit: string
  }
  
  export interface PerformanceBudget {
    id: string
    title: string
    description: string
    score: any
    scoreDisplayMode: string
  }
  
  export interface UsesOptimizedImages {
    id: string
    title: string
    description: string
    score: number
    scoreDisplayMode: string
    details: Details26
    warnings: any[]
    numericValue: number
    numericUnit: string
  }
  
  export interface Details26 {
    overallSavingsBytes: number
    type: string
    sortedBy: string[]
    debugData: DebugData9
    items: any[]
    overallSavingsMs: number
    headings: any[]
  }
  
  export interface DebugData9 {
    type: string
    metricSavings: MetricSavings7
  }
  
  export interface MetricSavings7 {
    FCP: number
    LCP: number
  }
  
  export interface UnusedJavascript {
    id: string
    title: string
    description: string
    score: number
    scoreDisplayMode: string
    displayValue: string
    details: Details27
    numericValue: number
    numericUnit: string
  }
  
  export interface Details27 {
    items: Item19[]
    sortedBy: string[]
    headings: Heading17[]
    type: string
    debugData: DebugData10
    overallSavingsBytes: number
    overallSavingsMs: number
  }
  
  export interface Item19 {
    wastedBytes: number
    wastedPercent: number
    url: string
    totalBytes: number
  }
  
  export interface Heading17 {
    label: string
    valueType: string
    subItemsHeading: SubItemsHeading2
    key: string
  }
  
  export interface SubItemsHeading2 {
    key: string
    valueType?: string
  }
  
  export interface DebugData10 {
    type: string
    metricSavings: MetricSavings8
  }
  
  export interface MetricSavings8 {
    LCP: number
    FCP: number
  }
  
  export interface MainThreadTasks {
    id: string
    title: string
    description: string
    score: any
    scoreDisplayMode: string
    details: Details28
  }
  
  export interface Details28 {
    type: string
    items: Item20[]
    headings: Heading18[]
  }
  
  export interface Item20 {
    duration: number
    startTime: number
  }
  
  export interface Heading18 {
    key: string
    granularity: number
    valueType: string
    label: string
  }
  
  export interface TimingBudget {
    id: string
    title: string
    description: string
    score: any
    scoreDisplayMode: string
  }
  
  export interface LcpLazyLoaded {
    id: string
    title: string
    description: string
    score: any
    scoreDisplayMode: string
  }
  
  export interface CumulativeLayoutShift {
    id: string
    title: string
    description: string
    score: number
    scoreDisplayMode: string
    displayValue: string
    details: Details29
    numericValue: number
    numericUnit: string
  }
  
  export interface Details29 {
    type: string
    items: Item21[]
  }
  
  export interface Item21 {
    cumulativeLayoutShiftMainFrame: number
  }
  
  export interface DuplicatedJavascript {
    id: string
    title: string
    description: string
    score: number
    scoreDisplayMode: string
    details: Details30
    numericValue: number
    numericUnit: string
  }
  
  export interface Details30 {
    type: string
    overallSavingsMs: number
    debugData: DebugData11
    items: any[]
    overallSavingsBytes: number
    sortedBy: string[]
    headings: any[]
  }
  
  export interface DebugData11 {
    type: string
    metricSavings: MetricSavings9
  }
  
  export interface MetricSavings9 {
    LCP: number
    FCP: number
  }
  
  export interface Interactive {
    id: string
    title: string
    description: string
    score: number
    scoreDisplayMode: string
    displayValue: string
    numericValue: number
    numericUnit: string
  }
  
  export interface LegacyJavascript {
    id: string
    title: string
    description: string
    score: number
    scoreDisplayMode: string
    displayValue: string
    details: Details31
    numericValue: number
    numericUnit: string
  }
  
  export interface Details31 {
    type: string
    debugData: DebugData12
    sortedBy: string[]
    overallSavingsBytes: number
    headings: Heading19[]
    items: Item22[]
    overallSavingsMs: number
  }
  
  export interface DebugData12 {
    metricSavings: MetricSavings10
    type: string
  }
  
  export interface MetricSavings10 {
    LCP: number
    FCP: number
  }
  
  export interface Heading19 {
    subItemsHeading?: SubItemsHeading3
    key?: string
    label?: string
    valueType: string
  }
  
  export interface SubItemsHeading3 {
    key: string
    valueType?: string
  }
  
  export interface Item22 {
    url: string
    subItems: SubItems2
    wastedBytes: number
    totalBytes: number
  }
  
  export interface SubItems2 {
    type: string
    items: Item23[]
  }
  
  export interface Item23 {
    location: Location
    signal: string
  }
  
  export interface Location {
    type: string
    url: string
    column: number
    urlProvider: string
    line: number
  }
  
  export interface UnminifiedJavascript {
    id: string
    title: string
    description: string
    score: number
    scoreDisplayMode: string
    details: Details32
    warnings: any[]
    numericValue: number
    numericUnit: string
  }
  
  export interface Details32 {
    headings: any[]
    debugData: DebugData13
    overallSavingsBytes: number
    type: string
    overallSavingsMs: number
    sortedBy: string[]
    items: any[]
  }
  
  export interface DebugData13 {
    metricSavings: MetricSavings11
    type: string
  }
  
  export interface MetricSavings11 {
    LCP: number
    FCP: number
  }
  
  export interface UsesRelPreconnect {
    id: string
    title: string
    description: string
    score: number
    scoreDisplayMode: string
    warnings: string[]
  }
  
  export interface NoDocumentWrite {
    id: string
    title: string
    description: string
    score: number
    scoreDisplayMode: string
    details: Details33
  }
  
  export interface Details33 {
    items: any[]
    type: string
    headings: any[]
  }
  
  export interface Diagnostics {
    id: string
    title: string
    description: string
    score: any
    scoreDisplayMode: string
    details: Details34
  }
  
  export interface Details34 {
    type: string
    items: Item24[]
  }
  
  export interface Item24 {
    numTasksOver500ms: number
    maxRtt: number
    numTasks: number
    maxServerLatency: number
    numTasksOver50ms: number
    numTasksOver100ms: number
    rtt: number
    numScripts: number
    numTasksOver10ms: number
    throughput: number
    mainDocumentTransferSize: number
    totalByteWeight: number
    numTasksOver25ms: number
    numStylesheets: number
    totalTaskTime: number
    numFonts: number
    numRequests: number
  }
  
  export interface CriticalRequestChains {
    id: string
    title: string
    description: string
    score: any
    scoreDisplayMode: string
    displayValue: string
    details: Details35
  }
  
  export interface Details35 {
    chains: Chains
    type: string
    longestChain: LongestChain
  }
  
  export interface Chains {
    FD786396D478F53A066F50784A48B6C0: Fd786396D478F53A066F50784A48B6C0
  }
  
  export interface Fd786396D478F53A066F50784A48B6C0 {
    request: Request
    children: Children2
  }
  
  export interface Request {
    endTime: number
    transferSize: number
    url: string
    responseReceivedTime: number
    startTime: number
  }
  
  export interface Children2 {
    "41.2": N412
    "41.5": N415
    "41.3": N413
    "41.4": N414
  }
  
  export interface N412 {
    request: Request2
    children: Children3
  }
  
  export interface Request2 {
    endTime: number
    transferSize: number
    url: string
    startTime: number
    responseReceivedTime: number
  }
  
  export interface Children3 {
    "41.146": N41146
    "41.139": N41139
    "41.90": N4190
    "41.153": N41153
  }
  
  export interface N41146 {
    request: Request3
  }
  
  export interface Request3 {
    startTime: number
    url: string
    endTime: number
    responseReceivedTime: number
    transferSize: number
  }
  
  export interface N41139 {
    request: Request4
  }
  
  export interface Request4 {
    endTime: number
    transferSize: number
    startTime: number
    responseReceivedTime: number
    url: string
  }
  
  export interface N4190 {
    request: Request5
  }
  
  export interface Request5 {
    endTime: number
    startTime: number
    transferSize: number
    url: string
    responseReceivedTime: number
  }
  
  export interface N41153 {
    request: Request6
  }
  
  export interface Request6 {
    endTime: number
    transferSize: number
    url: string
    startTime: number
    responseReceivedTime: number
  }
  
  export interface N415 {
    request: Request7
  }
  
  export interface Request7 {
    startTime: number
    responseReceivedTime: number
    url: string
    endTime: number
    transferSize: number
  }
  
  export interface N413 {
    children: Children4
    request: Request9
  }
  
  export interface Children4 {
    "41.172": N41172
  }
  
  export interface N41172 {
    request: Request8
  }
  
  export interface Request8 {
    transferSize: number
    startTime: number
    responseReceivedTime: number
    url: string
    endTime: number
  }
  
  export interface Request9 {
    responseReceivedTime: number
    endTime: number
    url: string
    transferSize: number
    startTime: number
  }
  
  export interface N414 {
    request: Request10
  }
  
  export interface Request10 {
    endTime: number
    transferSize: number
    url: string
    responseReceivedTime: number
    startTime: number
  }
  
  export interface LongestChain {
    transferSize: number
    duration: number
    length: number
  }
  
  export interface OffscreenImages {
    id: string
    title: string
    description: string
    score: number
    scoreDisplayMode: string
    displayValue: string
    details: Details36
    warnings: any[]
    numericValue: number
    numericUnit: string
  }
  
  export interface Details36 {
    items: Item25[]
    sortedBy: string[]
    type: string
    overallSavingsMs: number
    debugData: DebugData14
    headings: Heading20[]
    overallSavingsBytes: number
  }
  
  export interface Item25 {
    wastedBytes: number
    totalBytes: number
    wastedPercent: number
    node: Node8
    url: string
    requestStartTime: number
  }
  
  export interface Node8 {
    lhId: string
    selector: string
    type: string
    snippet: string
    path: string
    nodeLabel: string
    boundingRect: BoundingRect7
  }
  
  export interface BoundingRect7 {
    width: number
    right: number
    height: number
    left: number
    top: number
    bottom: number
  }
  
  export interface DebugData14 {
    type: string
    metricSavings: MetricSavings12
  }
  
  export interface MetricSavings12 {
    FCP: number
    LCP: number
  }
  
  export interface Heading20 {
    key: string
    valueType: string
    label?: string
  }
  
  export interface MaxPotentialFid {
    id: string
    title: string
    description: string
    score: number
    scoreDisplayMode: string
    displayValue: string
    numericValue: number
    numericUnit: string
  }
  
  export interface UserTimings {
    id: string
    title: string
    description: string
    score: any
    scoreDisplayMode: string
    displayValue: string
    details: Details37
  }
  
  export interface Details37 {
    headings: Heading21[]
    items: Item26[]
    type: string
  }
  
  export interface Heading21 {
    key: string
    valueType: string
    label: string
    granularity?: number
  }
  
  export interface Item26 {
    name: string
    duration?: number
    startTime: number
    timingType: string
  }
  
  export interface ScreenshotThumbnails {
    id: string
    title: string
    description: string
    score: any
    scoreDisplayMode: string
    details: Details38
  }
  
  export interface Details38 {
    items: Item27[]
    type: string
    scale: number
  }
  
  export interface Item27 {
    timestamp: number
    timing: number
    data: string
  }
  
  export interface NetworkRequests {
    id: string
    title: string
    description: string
    score: any
    scoreDisplayMode: string
    details: Details39
  }
  
  export interface Details39 {
    type: string
    debugData: DebugData15
    items: Item28[]
    headings: Heading22[]
  }
  
  export interface DebugData15 {
    networkStartTimeTs: number
    type: string
  }
  
  export interface Item28 {
    protocol?: string
    priority: string
    transferSize: number
    statusCode: number
    sessionTargetType: string
    experimentalFromMainFrame?: boolean
    url: string
    resourceType: string
    finished: boolean
    networkEndTime: number
    mimeType?: string
    entity: string
    rendererStartTime: number
    networkRequestTime: number
    resourceSize: number
  }
  
  export interface Heading22 {
    valueType: string
    label: string
    key: string
    granularity?: number
    displayUnit?: string
  }
  
  export interface NetworkRtt {
    id: string
    title: string
    description: string
    score: any
    scoreDisplayMode: string
    displayValue: string
    details: Details40
    numericValue: number
    numericUnit: string
  }
  
  export interface Details40 {
    sortedBy: string[]
    type: string
    headings: Heading23[]
    items: Item29[]
  }
  
  export interface Heading23 {
    key: string
    valueType: string
    label: string
    granularity?: number
  }
  
  export interface Item29 {
    origin: string
    rtt: number
  }
  
  export interface FinalScreenshot {
    id: string
    title: string
    description: string
    score: any
    scoreDisplayMode: string
    details: Details41
  }
  
  export interface Details41 {
    data: string
    timing: number
    timestamp: number
    type: string
  }
  
  export interface PrioritizeLcpImage {
    id: string
    title: string
    description: string
    score: any
    scoreDisplayMode: string
  }
  
  export interface Metrics3 {
    id: string
    title: string
    description: string
    score: any
    scoreDisplayMode: string
    details: Details42
    numericValue: number
    numericUnit: string
  }
  
  export interface Details42 {
    type: string
    items: Item30[]
  }
  
  export interface Item30 {
    observedLargestContentfulPaintAllFrames?: number
    observedFirstPaint?: number
    largestContentfulPaint?: number
    cumulativeLayoutShift?: number
    maxPotentialFID?: number
    speedIndex?: number
    observedSpeedIndex?: number
    cumulativeLayoutShiftMainFrame?: number
    observedDomContentLoaded?: number
    observedNavigationStartTs?: number
    observedLargestContentfulPaintAllFramesTs?: number
    observedFirstVisualChange?: number
    timeToFirstByte?: number
    observedCumulativeLayoutShift?: number
    observedFirstContentfulPaint?: number
    observedFirstPaintTs?: number
    observedFirstVisualChangeTs?: number
    observedFirstContentfulPaintAllFramesTs?: number
    observedLargestContentfulPaintTs?: number
    observedLastVisualChange?: number
    observedTimeOrigin?: number
    firstContentfulPaint?: number
    observedCumulativeLayoutShiftMainFrame?: number
    observedFirstMeaningfulPaintTs?: number
    firstMeaningfulPaint?: number
    observedLastVisualChangeTs?: number
    observedNavigationStart?: number
    observedFirstContentfulPaintAllFrames?: number
    observedTraceEnd?: number
    observedLoadTs?: number
    totalBlockingTime?: number
    interactive?: number
    observedDomContentLoadedTs?: number
    observedFirstContentfulPaintTs?: number
    observedTraceEndTs?: number
    observedTimeOriginTs?: number
    observedLargestContentfulPaint?: number
    observedLoad?: number
    observedFirstMeaningfulPaint?: number
    observedSpeedIndexTs?: number
    lcpInvalidated?: boolean
  }
  
  export interface Categories {
    performance: Performance
  }
  
  export interface Performance {
    id: string
    title: string
    score: number
    auditRefs: AuditRef[]
  }
  
  export interface AuditRef {
    id: string
    weight: number
    group?: string
    acronym?: string
    relevantAudits?: string[]
  }
  
  export interface CategoryGroups {
    "load-opportunities": LoadOpportunities
    "best-practices-ux": BestPracticesUx
    "a11y-tables-lists": A11yTablesLists
    "seo-mobile": SeoMobile
    "seo-crawl": SeoCrawl
    budgets: Budgets
    "pwa-installable": PwaInstallable
    "seo-content": SeoContent
    "best-practices-trust-safety": BestPracticesTrustSafety
    "a11y-color-contrast": A11yColorContrast
    "a11y-language": A11yLanguage
    "a11y-names-labels": A11yNamesLabels
    "best-practices-browser-compat": BestPracticesBrowserCompat
    "a11y-audio-video": A11yAudioVideo
    "a11y-navigation": A11yNavigation
    "a11y-best-practices": A11yBestPractices
    metrics: Metrics4
    "best-practices-general": BestPracticesGeneral
    "a11y-aria": A11yAria
    "pwa-optimized": PwaOptimized
    diagnostics: Diagnostics2
  }
  
  export interface LoadOpportunities {
    title: string
    description: string
  }
  
  export interface BestPracticesUx {
    title: string
  }
  
  export interface A11yTablesLists {
    title: string
    description: string
  }
  
  export interface SeoMobile {
    title: string
    description: string
  }
  
  export interface SeoCrawl {
    title: string
    description: string
  }
  
  export interface Budgets {
    title: string
    description: string
  }
  
  export interface PwaInstallable {
    title: string
  }
  
  export interface SeoContent {
    title: string
    description: string
  }
  
  export interface BestPracticesTrustSafety {
    title: string
  }
  
  export interface A11yColorContrast {
    title: string
    description: string
  }
  
  export interface A11yLanguage {
    title: string
    description: string
  }
  
  export interface A11yNamesLabels {
    title: string
    description: string
  }
  
  export interface BestPracticesBrowserCompat {
    title: string
  }
  
  export interface A11yAudioVideo {
    title: string
    description: string
  }
  
  export interface A11yNavigation {
    title: string
    description: string
  }
  
  export interface A11yBestPractices {
    title: string
    description: string
  }
  
  export interface Metrics4 {
    title: string
  }
  
  export interface BestPracticesGeneral {
    title: string
  }
  
  export interface A11yAria {
    title: string
    description: string
  }
  
  export interface PwaOptimized {
    title: string
  }
  
  export interface Diagnostics2 {
    title: string
    description: string
  }
  
  export interface Timing {
    total: number
  }
  
  export interface I18n {
    rendererFormattedStrings: RendererFormattedStrings
  }
  
  export interface RendererFormattedStrings {
    varianceDisclaimer: string
    opportunityResourceColumnLabel: string
    opportunitySavingsColumnLabel: string
    errorMissingAuditInfo: string
    errorLabel: string
    warningHeader: string
    passedAuditsGroupTitle: string
    notApplicableAuditsGroupTitle: string
    manualAuditsGroupTitle: string
    toplevelWarningsMessage: string
    crcLongestDurationLabel: string
    crcInitialNavigation: string
    lsPerformanceCategoryDescription: string
    labDataTitle: string
    warningAuditsGroupTitle: string
    snippetExpandButtonLabel: string
    snippetCollapseButtonLabel: string
    thirdPartyResourcesLabel: string
    runtimeDesktopEmulation: string
    runtimeMobileEmulation: string
    runtimeNoEmulation: string
    runtimeSettingsBenchmark: string
    runtimeSettingsCPUThrottling: string
    runtimeSettingsDevice: string
    runtimeSettingsNetworkThrottling: string
    runtimeSettingsUANetwork: string
    runtimeUnknown: string
    dropdownCopyJSON: string
    dropdownDarkTheme: string
    dropdownPrintExpanded: string
    dropdownPrintSummary: string
    dropdownSaveGist: string
    dropdownSaveHTML: string
    dropdownSaveJSON: string
    dropdownViewer: string
    footerIssue: string
    throttlingProvided: string
    calculatorLink: string
    runtimeSettingsAxeVersion: string
    viewTreemapLabel: string
    showRelevantAudits: string
  }
  
  export interface Entity {
    name: string
    isFirstParty?: boolean
    isUnrecognized?: boolean
    origins: string[]
    homepage?: string
    category?: string
  }
  
  export interface FullPageScreenshot {
    screenshot: Screenshot
    nodes: Nodes
  }
  
  export interface Screenshot {
    data: string
    height: number
    width: number
  }
  
  export interface Nodes {
    "1-8-IMG": N18Img
    "1-69-LINK": N169Link
    "1-94-META": N194Meta
    "1-98-META": N198Meta
    "1-27-IMG": N127Img
    "1-49-IMG": N149Img
    "1-11-IMG": N111Img
    "1-59-LINK": N159Link
    "page-4-DIV": Page4Div
    "1-50-IMG": N150Img
    "1-10-IMG": N110Img
    "1-72-LINK": N172Link
    "1-101-META": N1101Meta
    "1-85-LINK": N185Link
    "1-111-META": N1111Meta
    "1-20-IMG": N120Img
    "1-60-LINK": N160Link
    "1-84-LINK": N184Link
    "1-28-IMG": N128Img
    "1-66-LINK": N166Link
    "1-46-IMG": N146Img
    "1-73-LINK": N173Link
    "page-8-DIV": Page8Div
    "1-54-IMG": N154Img
    "1-58-LINK": N158Link
    "1-77-LINK": N177Link
    "1-93-META": N193Meta
    "1-18-IMG": N118Img
    "1-7-IMG": N17Img
    "1-88-LINK": N188Link
    "1-91-META": N191Meta
    "1-42-IMG": N142Img
    "1-4-IMG": N14Img
    "1-9-IMG": N19Img
    "1-5-IMG": N15Img
    "1-12-IMG": N112Img
    "1-14-IMG": N114Img
    "1-109-META": N1109Meta
    "1-34-IMG": N134Img
    "1-83-LINK": N183Link
    "1-97-META": N197Meta
    "1-23-IMG": N123Img
    "1-36-IMG": N136Img
    "1-40-IMG": N140Img
    "page-5-DEVSITE-PROGRESS": Page5DevsiteProgress
    "1-82-LINK": N182Link
    "page-6-DIV": Page6Div
    "1-110-META": N1110Meta
    "1-71-LINK": N171Link
    "1-105-META": N1105Meta
    "1-43-IMG": N143Img
    "page-1-DIV": Page1Div
    "1-24-IMG": N124Img
    "1-70-LINK": N170Link
    "1-76-LINK": N176Link
    "1-19-IMG": N119Img
    "1-35-IMG": N135Img
    "1-30-IMG": N130Img
    "1-86-LINK": N186Link
    "page-0-H3": Page0H3
    "1-81-LINK": N181Link
    "1-57-LINK": N157Link
    "1-29-IMG": N129Img
    "1-38-IMG": N138Img
    "1-102-META": N1102Meta
    "1-3-IMG": N13Img
    "1-47-IMG": N147Img
    "1-56-LINK": N156Link
    "1-106-META": N1106Meta
    "1-17-IMG": N117Img
    "1-15-IMG": N115Img
    "1-104-META": N1104Meta
    "1-22-IMG": N122Img
    "1-48-IMG": N148Img
    "1-61-LINK": N161Link
    "1-16-IMG": N116Img
    "1-32-IMG": N132Img
    "1-87-LINK": N187Link
    "1-103-META": N1103Meta
    "1-64-LINK": N164Link
    "1-31-IMG": N131Img
    "1-65-LINK": N165Link
    "1-45-IMG": N145Img
    "1-26-IMG": N126Img
    "1-6-IMG": N16Img
    "1-95-META": N195Meta
    "1-75-LINK": N175Link
    "page-9-DIV": Page9Div
    "1-74-LINK": N174Link
    "1-67-LINK": N167Link
    "1-92-META": N192Meta
    "1-63-LINK": N163Link
    "1-62-LINK": N162Link
    "1-25-IMG": N125Img
    "1-0-BUTTON": N10Button
    "1-51-IMG": N151Img
    "page-3-TAB": Page3Tab
    "1-68-LINK": N168Link
    "1-107-META": N1107Meta
    "1-89-LINK": N189Link
    "1-41-IMG": N141Img
    "1-33-IMG": N133Img
    "1-80-LINK": N180Link
    "page-7-H2": Page7H2
    "1-79-LINK": N179Link
    "1-13-IMG": N113Img
    "1-53-IMG": N153Img
    "1-52-IMG": N152Img
    "1-108-META": N1108Meta
    "1-55-LINK": N155Link
    "1-78-LINK": N178Link
    "1-1-UL": N11Ul
    "1-90-LINK": N190Link
    "1-2-IMG": N12Img
    "1-44-IMG": N144Img
    "1-21-IMG": N121Img
    "1-100-META": N1100Meta
    "1-37-IMG": N137Img
    "1-99-META": N199Meta
    "1-96-META": N196Meta
    "1-39-IMG": N139Img
    "page-2-DIV": Page2Div
  }
  
  export interface N18Img {
    left: number
    width: number
    bottom: number
    height: number
    top: number
    right: number
  }
  
  export interface N169Link {
    height: number
    top: number
    width: number
    bottom: number
    left: number
    right: number
  }
  
  export interface N194Meta {
    width: number
    height: number
    right: number
    top: number
    left: number
    bottom: number
  }
  
  export interface N198Meta {
    height: number
    left: number
    width: number
    top: number
    right: number
    bottom: number
  }
  
  export interface N127Img {
    left: number
    width: number
    bottom: number
    height: number
    right: number
    top: number
  }
  
  export interface N149Img {
    bottom: number
    width: number
    right: number
    height: number
    left: number
    top: number
  }
  
  export interface N111Img {
    left: number
    right: number
    width: number
    bottom: number
    top: number
    height: number
  }
  
  export interface N159Link {
    top: number
    width: number
    left: number
    bottom: number
    height: number
    right: number
  }
  
  export interface Page4Div {
    height: number
    width: number
    right: number
    bottom: number
    top: number
    left: number
  }
  
  export interface N150Img {
    bottom: number
    width: number
    top: number
    height: number
    left: number
    right: number
  }
  
  export interface N110Img {
    top: number
    bottom: number
    height: number
    left: number
    width: number
    right: number
  }
  
  export interface N172Link {
    bottom: number
    top: number
    right: number
    height: number
    left: number
    width: number
  }
  
  export interface N1101Meta {
    width: number
    top: number
    right: number
    height: number
    bottom: number
    left: number
  }
  
  export interface N185Link {
    top: number
    left: number
    height: number
    bottom: number
    right: number
    width: number
  }
  
  export interface N1111Meta {
    left: number
    bottom: number
    top: number
    width: number
    right: number
    height: number
  }
  
  export interface N120Img {
    left: number
    height: number
    top: number
    width: number
    bottom: number
    right: number
  }
  
  export interface N160Link {
    bottom: number
    top: number
    right: number
    left: number
    width: number
    height: number
  }
  
  export interface N184Link {
    width: number
    top: number
    bottom: number
    left: number
    right: number
    height: number
  }
  
  export interface N128Img {
    left: number
    right: number
    bottom: number
    height: number
    width: number
    top: number
  }
  
  export interface N166Link {
    bottom: number
    top: number
    left: number
    right: number
    height: number
    width: number
  }
  
  export interface N146Img {
    height: number
    left: number
    width: number
    top: number
    right: number
    bottom: number
  }
  
  export interface N173Link {
    width: number
    right: number
    top: number
    bottom: number
    height: number
    left: number
  }
  
  export interface Page8Div {
    bottom: number
    top: number
    left: number
    width: number
    right: number
    height: number
  }
  
  export interface N154Img {
    top: number
    right: number
    left: number
    width: number
    bottom: number
    height: number
  }
  
  export interface N158Link {
    left: number
    top: number
    bottom: number
    width: number
    right: number
    height: number
  }
  
  export interface N177Link {
    height: number
    width: number
    bottom: number
    right: number
    left: number
    top: number
  }
  
  export interface N193Meta {
    top: number
    height: number
    bottom: number
    right: number
    width: number
    left: number
  }
  
  export interface N118Img {
    bottom: number
    width: number
    left: number
    top: number
    height: number
    right: number
  }
  
  export interface N17Img {
    right: number
    left: number
    width: number
    bottom: number
    height: number
    top: number
  }
  
  export interface N188Link {
    bottom: number
    top: number
    right: number
    height: number
    width: number
    left: number
  }
  
  export interface N191Meta {
    bottom: number
    top: number
    left: number
    width: number
    height: number
    right: number
  }
  
  export interface N142Img {
    height: number
    right: number
    top: number
    left: number
    width: number
    bottom: number
  }
  
  export interface N14Img {
    width: number
    top: number
    height: number
    left: number
    bottom: number
    right: number
  }
  
  export interface N19Img {
    right: number
    bottom: number
    height: number
    left: number
    width: number
    top: number
  }
  
  export interface N15Img {
    top: number
    left: number
    right: number
    height: number
    width: number
    bottom: number
  }
  
  export interface N112Img {
    top: number
    height: number
    right: number
    bottom: number
    left: number
    width: number
  }
  
  export interface N114Img {
    bottom: number
    height: number
    top: number
    right: number
    width: number
    left: number
  }
  
  export interface N1109Meta {
    left: number
    width: number
    bottom: number
    height: number
    right: number
    top: number
  }
  
  export interface N134Img {
    right: number
    width: number
    left: number
    top: number
    height: number
    bottom: number
  }
  
  export interface N183Link {
    left: number
    bottom: number
    height: number
    width: number
    top: number
    right: number
  }
  
  export interface N197Meta {
    width: number
    bottom: number
    top: number
    height: number
    right: number
    left: number
  }
  
  export interface N123Img {
    top: number
    right: number
    width: number
    left: number
    height: number
    bottom: number
  }
  
  export interface N136Img {
    height: number
    bottom: number
    top: number
    left: number
    right: number
    width: number
  }
  
  export interface N140Img {
    height: number
    right: number
    width: number
    top: number
    left: number
    bottom: number
  }
  
  export interface Page5DevsiteProgress {
    right: number
    left: number
    bottom: number
    height: number
    width: number
    top: number
  }
  
  export interface N182Link {
    left: number
    top: number
    right: number
    height: number
    width: number
    bottom: number
  }
  
  export interface Page6Div {
    right: number
    bottom: number
    top: number
    height: number
    width: number
    left: number
  }
  
  export interface N1110Meta {
    height: number
    top: number
    bottom: number
    right: number
    width: number
    left: number
  }
  
  export interface N171Link {
    right: number
    left: number
    bottom: number
    height: number
    width: number
    top: number
  }
  
  export interface N1105Meta {
    width: number
    top: number
    left: number
    right: number
    height: number
    bottom: number
  }
  
  export interface N143Img {
    right: number
    top: number
    left: number
    bottom: number
    height: number
    width: number
  }
  
  export interface Page1Div {
    bottom: number
    top: number
    left: number
    height: number
    width: number
    right: number
  }
  
  export interface N124Img {
    bottom: number
    top: number
    right: number
    height: number
    left: number
    width: number
  }
  
  export interface N170Link {
    right: number
    width: number
    height: number
    left: number
    bottom: number
    top: number
  }
  
  export interface N176Link {
    left: number
    top: number
    width: number
    bottom: number
    height: number
    right: number
  }
  
  export interface N119Img {
    left: number
    top: number
    right: number
    height: number
    width: number
    bottom: number
  }
  
  export interface N135Img {
    right: number
    bottom: number
    top: number
    left: number
    width: number
    height: number
  }
  
  export interface N130Img {
    right: number
    left: number
    height: number
    bottom: number
    top: number
    width: number
  }
  
  export interface N186Link {
    width: number
    height: number
    right: number
    top: number
    bottom: number
    left: number
  }
  
  export interface Page0H3 {
    width: number
    top: number
    height: number
    right: number
    bottom: number
    left: number
  }
  
  export interface N181Link {
    width: number
    left: number
    right: number
    top: number
    height: number
    bottom: number
  }
  
  export interface N157Link {
    left: number
    width: number
    height: number
    right: number
    bottom: number
    top: number
  }
  
  export interface N129Img {
    left: number
    top: number
    width: number
    height: number
    bottom: number
    right: number
  }
  
  export interface N138Img {
    top: number
    left: number
    width: number
    bottom: number
    height: number
    right: number
  }
  
  export interface N1102Meta {
    left: number
    height: number
    top: number
    bottom: number
    right: number
    width: number
  }
  
  export interface N13Img {
    top: number
    height: number
    left: number
    bottom: number
    width: number
    right: number
  }
  
  export interface N147Img {
    height: number
    left: number
    width: number
    right: number
    top: number
    bottom: number
  }
  
  export interface N156Link {
    width: number
    bottom: number
    left: number
    top: number
    height: number
    right: number
  }
  
  export interface N1106Meta {
    right: number
    height: number
    left: number
    width: number
    top: number
    bottom: number
  }
  
  export interface N117Img {
    width: number
    left: number
    bottom: number
    height: number
    right: number
    top: number
  }
  
  export interface N115Img {
    height: number
    top: number
    right: number
    left: number
    bottom: number
    width: number
  }
  
  export interface N1104Meta {
    top: number
    bottom: number
    left: number
    right: number
    height: number
    width: number
  }
  
  export interface N122Img {
    right: number
    top: number
    height: number
    left: number
    bottom: number
    width: number
  }
  
  export interface N148Img {
    left: number
    right: number
    width: number
    top: number
    height: number
    bottom: number
  }
  
  export interface N161Link {
    left: number
    right: number
    top: number
    width: number
    height: number
    bottom: number
  }
  
  export interface N116Img {
    width: number
    left: number
    top: number
    height: number
    right: number
    bottom: number
  }
  
  export interface N132Img {
    width: number
    bottom: number
    height: number
    left: number
    top: number
    right: number
  }
  
  export interface N187Link {
    top: number
    height: number
    width: number
    right: number
    left: number
    bottom: number
  }
  
  export interface N1103Meta {
    bottom: number
    height: number
    right: number
    width: number
    left: number
    top: number
  }
  
  export interface N164Link {
    height: number
    top: number
    width: number
    bottom: number
    left: number
    right: number
  }
  
  export interface N131Img {
    bottom: number
    width: number
    left: number
    height: number
    right: number
    top: number
  }
  
  export interface N165Link {
    top: number
    width: number
    bottom: number
    right: number
    height: number
    left: number
  }
  
  export interface N145Img {
    height: number
    top: number
    width: number
    right: number
    bottom: number
    left: number
  }
  
  export interface N126Img {
    left: number
    width: number
    bottom: number
    right: number
    height: number
    top: number
  }
  
  export interface N16Img {
    bottom: number
    left: number
    top: number
    right: number
    width: number
    height: number
  }
  
  export interface N195Meta {
    left: number
    width: number
    right: number
    bottom: number
    top: number
    height: number
  }
  
  export interface N175Link {
    top: number
    width: number
    right: number
    left: number
    bottom: number
    height: number
  }
  
  export interface Page9Div {
    height: number
    top: number
    right: number
    left: number
    bottom: number
    width: number
  }
  
  export interface N174Link {
    width: number
    height: number
    bottom: number
    right: number
    left: number
    top: number
  }
  
  export interface N167Link {
    bottom: number
    width: number
    top: number
    right: number
    height: number
    left: number
  }
  
  export interface N192Meta {
    top: number
    left: number
    height: number
    bottom: number
    width: number
    right: number
  }
  
  export interface N163Link {
    bottom: number
    top: number
    right: number
    left: number
    height: number
    width: number
  }
  
  export interface N162Link {
    bottom: number
    width: number
    top: number
    height: number
    right: number
    left: number
  }
  
  export interface N125Img {
    width: number
    left: number
    right: number
    bottom: number
    height: number
    top: number
  }
  
  export interface N10Button {
    top: number
    bottom: number
    height: number
    right: number
    left: number
    width: number
  }
  
  export interface N151Img {
    width: number
    right: number
    top: number
    bottom: number
    height: number
    left: number
  }
  
  export interface Page3Tab {
    top: number
    left: number
    height: number
    bottom: number
    right: number
    width: number
  }
  
  export interface N168Link {
    top: number
    width: number
    height: number
    right: number
    bottom: number
    left: number
  }
  
  export interface N1107Meta {
    top: number
    bottom: number
    width: number
    right: number
    height: number
    left: number
  }
  
  export interface N189Link {
    height: number
    right: number
    bottom: number
    top: number
    left: number
    width: number
  }
  
  export interface N141Img {
    right: number
    top: number
    bottom: number
    left: number
    width: number
    height: number
  }
  
  export interface N133Img {
    top: number
    height: number
    width: number
    bottom: number
    right: number
    left: number
  }
  
  export interface N180Link {
    height: number
    bottom: number
    right: number
    width: number
    left: number
    top: number
  }
  
  export interface Page7H2 {
    left: number
    height: number
    width: number
    right: number
    bottom: number
    top: number
  }
  
  export interface N179Link {
    left: number
    width: number
    top: number
    right: number
    bottom: number
    height: number
  }
  
  export interface N113Img {
    left: number
    height: number
    bottom: number
    right: number
    width: number
    top: number
  }
  
  export interface N153Img {
    top: number
    width: number
    height: number
    right: number
    left: number
    bottom: number
  }
  
  export interface N152Img {
    height: number
    left: number
    right: number
    width: number
    bottom: number
    top: number
  }
  
  export interface N1108Meta {
    right: number
    left: number
    height: number
    width: number
    top: number
    bottom: number
  }
  
  export interface N155Link {
    height: number
    right: number
    width: number
    bottom: number
    left: number
    top: number
  }
  
  export interface N178Link {
    top: number
    width: number
    left: number
    height: number
    right: number
    bottom: number
  }
  
  export interface N11Ul {
    right: number
    bottom: number
    top: number
    height: number
    left: number
    width: number
  }
  
  export interface N190Link {
    right: number
    top: number
    left: number
    bottom: number
    width: number
    height: number
  }
  
  export interface N12Img {
    bottom: number
    top: number
    height: number
    left: number
    width: number
    right: number
  }
  
  export interface N144Img {
    left: number
    top: number
    bottom: number
    height: number
    width: number
    right: number
  }
  
  export interface N121Img {
    bottom: number
    right: number
    height: number
    width: number
    left: number
    top: number
  }
  
  export interface N1100Meta {
    top: number
    right: number
    left: number
    height: number
    bottom: number
    width: number
  }
  
  export interface N137Img {
    bottom: number
    width: number
    top: number
    left: number
    right: number
    height: number
  }
  
  export interface N199Meta {
    right: number
    height: number
    bottom: number
    left: number
    top: number
    width: number
  }
  
  export interface N196Meta {
    height: number
    right: number
    bottom: number
    left: number
    top: number
    width: number
  }
  
  export interface N139Img {
    height: number
    bottom: number
    left: number
    top: number
    width: number
    right: number
  }
  
  export interface Page2Div {
    bottom: number
    width: number
    left: number
    height: number
    top: number
    right: number
  }
  