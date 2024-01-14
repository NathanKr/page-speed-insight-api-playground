export interface Root {
  captchaResult: string
  kind: string
  id: string
  // --- loadingExperience : i was able to get info for popular websites not mine
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
  credits: Credits
}

export interface Credits {
  "axe-core": string
}

export interface ConfigSettings {
  emulatedFormFactor: string
  formFactor: string
  locale: string
  onlyCategories: string[]
  channel: string
}

export interface Audits {
  "unminified-javascript": UnminifiedJavascript
  "offscreen-images": OffscreenImages
  "image-size-responsive": ImageSizeResponsive
  "uses-responsive-images": UsesResponsiveImages
  hreflang: Hreflang
  "document-title": DocumentTitle
  "object-alt": ObjectAlt
  "form-field-multiple-labels": FormFieldMultipleLabels
  "aria-command-name": AriaCommandName
  "cumulative-layout-shift": CumulativeLayoutShift
  "color-contrast": ColorContrast
  "empty-heading": EmptyHeading
  "is-on-https": IsOnHttps
  "input-image-alt": InputImageAlt
  deprecations: Deprecations
  "visual-order-follows-dom": VisualOrderFollowsDom
  viewport: Viewport
  "definition-list": DefinitionList
  "meta-viewport": MetaViewport
  "network-rtt": NetworkRtt
  "interactive-element-affordance": InteractiveElementAffordance
  dlitem: Dlitem
  "aria-required-attr": AriaRequiredAttr
  "link-name": LinkName
  metrics: Metrics3
  "uses-passive-event-listeners": UsesPassiveEventListeners
  tabindex: Tabindex
  "total-byte-weight": TotalByteWeight
  canonical: Canonical
  "button-name": ButtonName
  "robots-txt": RobotsTxt
  "aria-allowed-attr": AriaAllowedAttr
  "server-response-time": ServerResponseTime
  "valid-source-maps": ValidSourceMaps
  "network-requests": NetworkRequests
  "unminified-css": UnminifiedCss
  "performance-budget": PerformanceBudget
  "first-contentful-paint": FirstContentfulPaint
  "critical-request-chains": CriticalRequestChains
  "valid-lang": ValidLang
  "aria-treeitem-name": AriaTreeitemName
  "logical-tab-order": LogicalTabOrder
  "link-text": LinkText
  "aria-input-field-name": AriaInputFieldName
  "largest-contentful-paint": LargestContentfulPaint
  "aria-valid-attr-value": AriaValidAttrValue
  "dom-size": DomSize
  "video-caption": VideoCaption
  "aria-allowed-role": AriaAllowedRole
  "offscreen-content-hidden": OffscreenContentHidden
  "use-landmarks": UseLandmarks
  "timing-budget": TimingBudget
  interactive: Interactive
  "font-size": FontSize
  "max-potential-fid": MaxPotentialFid
  "select-name": SelectName
  "aria-valid-attr": AriaValidAttr
  "unused-css-rules": UnusedCssRules
  "label-content-name-mismatch": LabelContentNameMismatch
  "aria-hidden-focus": AriaHiddenFocus
  "legacy-javascript": LegacyJavascript
  "final-screenshot": FinalScreenshot
  "image-alt": ImageAlt
  "http-status-code": HttpStatusCode
  "meta-refresh": MetaRefresh
  "unused-javascript": UnusedJavascript
  "no-unload-listeners": NoUnloadListeners
  "frame-title": FrameTitle
  "image-redundant-alt": ImageRedundantAlt
  "uses-long-cache-ttl": UsesLongCacheTtl
  label: Label
  "modern-image-formats": ModernImageFormats
  "input-button-name": InputButtonName
  "duplicate-id-aria": DuplicateIdAria
  "uses-rel-preconnect": UsesRelPreconnect
  "landmark-one-main": LandmarkOneMain
  "user-timings": UserTimings
  "total-blocking-time": TotalBlockingTime
  "table-duplicate-name": TableDuplicateName
  "tap-targets": TapTargets
  "meta-description": MetaDescription
  "skip-link": SkipLink
  "third-party-facades": ThirdPartyFacades
  "crawlable-anchors": CrawlableAnchors
  "heading-order": HeadingOrder
  "is-crawlable": IsCrawlable
  "efficient-animated-content": EfficientAnimatedContent
  list: List
  "aria-roles": AriaRoles
  "mainthread-work-breakdown": MainthreadWorkBreakdown
  "bootup-time": BootupTime
  "image-aspect-ratio": ImageAspectRatio
  redirects: Redirects
  "aria-toggle-field-name": AriaToggleFieldName
  accesskeys: Accesskeys
  "unsized-images": UnsizedImages
  "paste-preventing-inputs": PastePreventingInputs
  "lcp-lazy-loaded": LcpLazyLoaded
  "first-meaningful-paint": FirstMeaningfulPaint
  "managed-focus": ManagedFocus
  "custom-controls-labels": CustomControlsLabels
  "errors-in-console": ErrorsInConsole
  "custom-controls-roles": CustomControlsRoles
  "layout-shift-elements": LayoutShiftElements
  "inspector-issues": InspectorIssues
  "preload-fonts": PreloadFonts
  bypass: Bypass
  listitem: Listitem
  "td-has-header": TdHasHeader
  diagnostics: Diagnostics
  "js-libraries": JsLibraries
  "html-has-lang": HtmlHasLang
  doctype: Doctype
  "font-display": FontDisplay
  "focusable-controls": FocusableControls
  "largest-contentful-paint-element": LargestContentfulPaintElement
  "aria-required-children": AriaRequiredChildren
  "aria-text": AriaText
  "duplicate-id-active": DuplicateIdActive
  "screenshot-thumbnails": ScreenshotThumbnails
  "structured-data": StructuredData
  "table-fake-caption": TableFakeCaption
  "uses-optimized-images": UsesOptimizedImages
  "prioritize-lcp-image": PrioritizeLcpImage
  "html-xml-lang-mismatch": HtmlXmlLangMismatch
  charset: Charset
  "focus-traps": FocusTraps
  "aria-required-parent": AriaRequiredParent
  "aria-tooltip-name": AriaTooltipName
  "csp-xss": CspXss
  "uses-rel-preload": UsesRelPreload
  "link-in-text-block": LinkInTextBlock
  "script-treemap-data": ScriptTreemapData
  "aria-meter-name": AriaMeterName
  "non-composited-animations": NonCompositedAnimations
  "aria-progressbar-name": AriaProgressbarName
  "html-lang-valid": HtmlLangValid
  "long-tasks": LongTasks
  "notification-on-start": NotificationOnStart
  "aria-dialog-name": AriaDialogName
  "speed-index": SpeedIndex
  "th-has-data-cells": ThHasDataCells
  "geolocation-on-start": GeolocationOnStart
  plugins: Plugins
  "network-server-latency": NetworkServerLatency
  "aria-hidden-body": AriaHiddenBody
  "target-size": TargetSize
  "uses-text-compression": UsesTextCompression
  "render-blocking-resources": RenderBlockingResources
  "duplicated-javascript": DuplicatedJavascript
  "no-document-write": NoDocumentWrite
  "main-thread-tasks": MainThreadTasks
  "third-party-summary": ThirdPartySummary
  "identical-links-same-purpose": IdenticalLinksSamePurpose
  "td-headers-attr": TdHeadersAttr
}

export interface UnminifiedJavascript {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details
  warnings: any[]
  numericValue: number
  numericUnit: string
}

export interface Details {
  overallSavingsBytes: number
  headings: any[]
  debugData: DebugData
  type: string
  overallSavingsMs: number
  sortedBy: string[]
  items: any[]
}

export interface DebugData {
  type: string
  metricSavings: MetricSavings
}

export interface MetricSavings {
  FCP: number
  LCP: number
}

export interface OffscreenImages {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  displayValue: string
  details: Details2
  warnings: any[]
  numericValue: number
  numericUnit: string
}

export interface Details2 {
  type: string
  overallSavingsBytes: number
  debugData: DebugData2
  sortedBy: string[]
  overallSavingsMs: number
  headings: Heading[]
  items: Item[]
}

export interface DebugData2 {
  metricSavings: MetricSavings2
  type: string
}

export interface MetricSavings2 {
  LCP: number
  FCP: number
}

export interface Heading {
  valueType: string
  key: string
  label?: string
}

export interface Item {
  wastedPercent: number
  totalBytes: number
  wastedBytes: number
  url: string
  requestStartTime: number
  node: Node
}

export interface Node {
  type: string
  selector: string
  snippet: string
  nodeLabel: string
  boundingRect: BoundingRect
  path: string
  lhId: string
}

export interface BoundingRect {
  top: number
  left: number
  right: number
  height: number
  width: number
  bottom: number
}

export interface ImageSizeResponsive {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details3
}

export interface Details3 {
  items: any[]
  headings: any[]
  type: string
}

export interface UsesResponsiveImages {
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
  headings: Heading2[]
  items: Item2[]
  sortedBy: string[]
  overallSavingsMs: number
  type: string
  debugData: DebugData3
  overallSavingsBytes: number
}

export interface Heading2 {
  key: string
  valueType: string
  label?: string
}

export interface Item2 {
  url: string
  node: Node2
  totalBytes: number
  wastedPercent: number
  wastedBytes: number
}

export interface Node2 {
  path: string
  nodeLabel: string
  boundingRect: BoundingRect2
  type: string
  snippet: string
  selector: string
  lhId: string
}

export interface BoundingRect2 {
  bottom: number
  right: number
  width: number
  height: number
  top: number
  left: number
}

export interface DebugData3 {
  metricSavings: MetricSavings3
  type: string
}

export interface MetricSavings3 {
  FCP: number
  LCP: number
}

export interface Hreflang {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details5
}

export interface Details5 {
  items: any[]
  type: string
  headings: any[]
}

export interface DocumentTitle {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details6
}

export interface Details6 {
  items: any[]
  headings: any[]
  type: string
}

export interface ObjectAlt {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
}

export interface FormFieldMultipleLabels {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
}

export interface AriaCommandName {
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
  details: Details7
  numericValue: number
  numericUnit: string
}

export interface Details7 {
  items: Item3[]
  type: string
}

export interface Item3 {
  cumulativeLayoutShiftMainFrame: number
}

export interface ColorContrast {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details8
}

export interface Details8 {
  headings: any[]
  type: string
  items: any[]
}

export interface EmptyHeading {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
}

export interface IsOnHttps {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details9
}

export interface Details9 {
  items: any[]
  headings: any[]
  type: string
}

export interface InputImageAlt {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
}

export interface Deprecations {
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

export interface VisualOrderFollowsDom {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
}

export interface Viewport {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  warnings: any[]
}

export interface DefinitionList {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
}

export interface MetaViewport {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details11
}

export interface Details11 {
  type: string
  items: any[]
  headings: any[]
}

export interface NetworkRtt {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
  displayValue: string
  details: Details12
  numericValue: number
  numericUnit: string
}

export interface Details12 {
  sortedBy: string[]
  type: string
  items: Item4[]
  headings: Heading3[]
}

export interface Item4 {
  origin: string
  rtt: number
}

export interface Heading3 {
  key: string
  label: string
  valueType: string
  granularity?: number
}

export interface InteractiveElementAffordance {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
}

export interface Dlitem {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
}

export interface AriaRequiredAttr {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details13
}

export interface Details13 {
  headings: any[]
  type: string
  items: any[]
}

export interface LinkName {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details14
}

export interface Details14 {
  debugData: DebugData4
  type: string
  headings: Heading4[]
  items: Item5[]
}

export interface DebugData4 {
  impact: string
  type: string
  tags: string[]
}

export interface Heading4 {
  label: string
  valueType: string
  key: string
  subItemsHeading: SubItemsHeading
}

export interface SubItemsHeading {
  valueType: string
  key: string
}

export interface Item5 {
  node: Node3
}

export interface Node3 {
  lhId: string
  explanation: string
  selector: string
  snippet: string
  path: string
  type: string
  nodeLabel: string
  boundingRect: BoundingRect3
}

export interface BoundingRect3 {
  width: number
  right: number
  bottom: number
  top: number
  height: number
  left: number
}

export interface Metrics3 {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
  details: Details15
  numericValue: number
  numericUnit: string
}

export interface Details15 {
  items: Item6[]
  type: string
}

export interface Item6 {
  observedLargestContentfulPaintAllFramesTs?: number
  observedDomContentLoadedTs?: number
  observedLargestContentfulPaint?: number
  observedFirstContentfulPaintAllFramesTs?: number
  observedCumulativeLayoutShiftMainFrame?: number
  observedCumulativeLayoutShift?: number
  speedIndex?: number
  cumulativeLayoutShiftMainFrame?: number
  observedLargestContentfulPaintAllFrames?: number
  observedSpeedIndex?: number
  observedFirstPaintTs?: number
  lcpLoadStart?: number
  observedNavigationStartTs?: number
  observedFirstContentfulPaintTs?: number
  largestContentfulPaint?: number
  observedTraceEndTs?: number
  observedFirstVisualChange?: number
  observedLoad?: number
  observedLastVisualChangeTs?: number
  observedLoadTs?: number
  observedDomContentLoaded?: number
  observedFirstMeaningfulPaintTs?: number
  totalBlockingTime?: number
  timeToFirstByte?: number
  observedTraceEnd?: number
  lcpLoadEnd?: number
  observedNavigationStart?: number
  observedFirstVisualChangeTs?: number
  observedFirstContentfulPaintAllFrames?: number
  firstContentfulPaint?: number
  cumulativeLayoutShift?: number
  observedFirstContentfulPaint?: number
  observedLastVisualChange?: number
  observedTimeOriginTs?: number
  observedLargestContentfulPaintTs?: number
  interactive?: number
  firstMeaningfulPaint?: number
  observedFirstMeaningfulPaint?: number
  observedTimeOrigin?: number
  observedSpeedIndexTs?: number
  maxPotentialFID?: number
  observedFirstPaint?: number
  lcpInvalidated?: boolean
}

export interface UsesPassiveEventListeners {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details16
}

export interface Details16 {
  items: any[]
  type: string
  headings: any[]
}

export interface Tabindex {
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
  details: Details17
  numericValue: number
  numericUnit: string
}

export interface Details17 {
  sortedBy: string[]
  items: Item7[]
  type: string
  headings: Heading5[]
}

export interface Item7 {
  url: string
  totalBytes: number
}

export interface Heading5 {
  key: string
  label: string
  valueType: string
}

export interface Canonical {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
}

export interface ButtonName {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details18
}

export interface Details18 {
  items: any[]
  type: string
  headings: any[]
}

export interface RobotsTxt {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details19
}

export interface Details19 {
  headings: any[]
  type: string
  items: any[]
}

export interface AriaAllowedAttr {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details20
}

export interface Details20 {
  type: string
  items: any[]
  headings: any[]
}

export interface ServerResponseTime {
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
  headings: Heading6[]
  overallSavingsMs: number
  items: Item8[]
  type: string
}

export interface Heading6 {
  valueType: string
  label: string
  key: string
}

export interface Item8 {
  responseTime: number
  url: string
}

export interface ValidSourceMaps {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details22
}

export interface Details22 {
  items: any[]
  headings: any[]
  type: string
}

export interface NetworkRequests {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
  details: Details23
}

export interface Details23 {
  headings: Heading7[]
  type: string
  items: Item9[]
  debugData: DebugData5
}

export interface Heading7 {
  label: string
  valueType: string
  key: string
  granularity?: number
  displayUnit?: string
}

export interface Item9 {
  experimentalFromMainFrame?: boolean
  networkEndTime: number
  priority: string
  networkRequestTime: number
  rendererStartTime: number
  transferSize: number
  finished: boolean
  entity: string
  sessionTargetType: string
  mimeType?: string
  url: string
  statusCode: number
  protocol?: string
  resourceType: string
  resourceSize: number
}

export interface DebugData5 {
  networkStartTimeTs: number
  type: string
}

export interface UnminifiedCss {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details24
  numericValue: number
  numericUnit: string
}

export interface Details24 {
  headings: any[]
  sortedBy: string[]
  type: string
  overallSavingsMs: number
  overallSavingsBytes: number
  items: any[]
  debugData: DebugData6
}

export interface DebugData6 {
  metricSavings: MetricSavings4
  type: string
}

export interface MetricSavings4 {
  LCP: number
  FCP: number
}

export interface PerformanceBudget {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
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

export interface CriticalRequestChains {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
  displayValue: string
  details: Details25
}

export interface Details25 {
  chains: Chains
  type: string
  longestChain: LongestChain
}

export interface Chains {
  CB9044BC2304E11959405D7BBBA344D7: Cb9044Bc2304E11959405D7Bbba344D7
}

export interface Cb9044Bc2304E11959405D7Bbba344D7 {
  children: Children
  request: Request10
}

export interface Children {
  "41.4": N414
  "41.5": N415
  "41.2": N412
  "41.3": N413
}

export interface N414 {
  request: Request
}

export interface Request {
  responseReceivedTime: number
  url: string
  startTime: number
  transferSize: number
  endTime: number
}

export interface N415 {
  request: Request2
}

export interface Request2 {
  url: string
  responseReceivedTime: number
  endTime: number
  transferSize: number
  startTime: number
}

export interface N412 {
  request: Request3
  children: Children2
}

export interface Request3 {
  url: string
  endTime: number
  startTime: number
  responseReceivedTime: number
  transferSize: number
}

export interface Children2 {
  "41.148": N41148
  "41.141": N41141
  "41.134": N41134
  "41.85": N4185
}

export interface N41148 {
  request: Request4
}

export interface Request4 {
  responseReceivedTime: number
  url: string
  transferSize: number
  startTime: number
  endTime: number
}

export interface N41141 {
  request: Request5
}

export interface Request5 {
  endTime: number
  url: string
  responseReceivedTime: number
  transferSize: number
  startTime: number
}

export interface N41134 {
  request: Request6
}

export interface Request6 {
  url: string
  startTime: number
  transferSize: number
  responseReceivedTime: number
  endTime: number
}

export interface N4185 {
  request: Request7
}

export interface Request7 {
  transferSize: number
  responseReceivedTime: number
  url: string
  endTime: number
  startTime: number
}

export interface N413 {
  children: Children3
  request: Request9
}

export interface Children3 {
  "41.167": N41167
}

export interface N41167 {
  request: Request8
}

export interface Request8 {
  transferSize: number
  url: string
  startTime: number
  endTime: number
  responseReceivedTime: number
}

export interface Request9 {
  transferSize: number
  endTime: number
  responseReceivedTime: number
  url: string
  startTime: number
}

export interface Request10 {
  startTime: number
  responseReceivedTime: number
  transferSize: number
  url: string
  endTime: number
}

export interface LongestChain {
  transferSize: number
  duration: number
  length: number
}

export interface ValidLang {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
}

export interface AriaTreeitemName {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
}

export interface LogicalTabOrder {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
}

export interface LinkText {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  displayValue: string
  details: Details26
}

export interface Details26 {
  type: string
  headings: Heading8[]
  items: Item10[]
}

export interface Heading8 {
  valueType: string
  label: string
  key: string
}

export interface Item10 {
  href: string
  text: string
}

export interface AriaInputFieldName {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
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

export interface AriaValidAttrValue {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details27
}

export interface Details27 {
  type: string
  items: any[]
  headings: any[]
}

export interface DomSize {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  displayValue: string
  details: Details28
  numericValue: number
  numericUnit: string
}

export interface Details28 {
  headings: Heading9[]
  items: Item11[]
  type: string
}

export interface Heading9 {
  label: string
  valueType: string
  key: string
}

export interface Item11 {
  statistic: string
  value: Value
  node?: Node4
}

export interface Value {
  value: number
  granularity: number
  type: string
}

export interface Node4 {
  boundingRect: BoundingRect4
  snippet: string
  nodeLabel: string
  type: string
  path: string
  lhId: string
  selector: string
}

export interface BoundingRect4 {
  height: number
  top: number
  bottom: number
  left: number
  right: number
  width: number
}

export interface VideoCaption {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
}

export interface AriaAllowedRole {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details29
}

export interface Details29 {
  headings: any[]
  type: string
  items: any[]
}

export interface OffscreenContentHidden {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
}

export interface UseLandmarks {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
}

export interface TimingBudget {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
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

export interface FontSize {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
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

export interface SelectName {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
}

export interface AriaValidAttr {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details30
}

export interface Details30 {
  items: any[]
  headings: any[]
  type: string
}

export interface UnusedCssRules {
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
  overallSavingsBytes: number
  sortedBy: string[]
  type: string
  headings: Heading10[]
  overallSavingsMs: number
  items: Item12[]
  debugData: DebugData7
}

export interface Heading10 {
  label: string
  valueType: string
  key: string
}

export interface Item12 {
  totalBytes: number
  wastedPercent: number
  url: string
  wastedBytes: number
}

export interface DebugData7 {
  type: string
  metricSavings: MetricSavings5
}

export interface MetricSavings5 {
  LCP: number
  FCP: number
}

export interface LabelContentNameMismatch {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details32
}

export interface Details32 {
  headings: Heading11[]
  items: Item13[]
  type: string
  debugData: DebugData8
}

export interface Heading11 {
  subItemsHeading: SubItemsHeading2
  label: string
  valueType: string
  key: string
}

export interface SubItemsHeading2 {
  valueType: string
  key: string
}

export interface Item13 {
  node: Node5
}

export interface Node5 {
  selector: string
  nodeLabel: string
  path: string
  explanation: string
  lhId: string
  type: string
  boundingRect: BoundingRect5
  snippet: string
}

export interface BoundingRect5 {
  left: number
  height: number
  top: number
  width: number
  right: number
  bottom: number
}

export interface DebugData8 {
  impact: string
  tags: string[]
  type: string
}

export interface AriaHiddenFocus {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details33
}

export interface Details33 {
  type: string
  headings: any[]
  items: any[]
}

export interface LegacyJavascript {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  displayValue: string
  details: Details34
  numericValue: number
  numericUnit: string
}

export interface Details34 {
  overallSavingsBytes: number
  type: string
  overallSavingsMs: number
  items: Item14[]
  debugData: DebugData9
  sortedBy: string[]
  headings: Heading12[]
}

export interface Item14 {
  totalBytes: number
  subItems: SubItems
  wastedBytes: number
  url: string
}

export interface SubItems {
  type: string
  items: Item15[]
}

export interface Item15 {
  location: Location
  signal: string
}

export interface Location {
  urlProvider: string
  column: number
  line: number
  url: string
  type: string
}

export interface DebugData9 {
  metricSavings: MetricSavings6
  type: string
}

export interface MetricSavings6 {
  LCP: number
  FCP: number
}

export interface Heading12 {
  valueType: string
  key?: string
  label?: string
  subItemsHeading?: SubItemsHeading3
}

export interface SubItemsHeading3 {
  valueType?: string
  key: string
}

export interface FinalScreenshot {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
  details: Details35
}

export interface Details35 {
  data: string
  type: string
  timestamp: number
  timing: number
}

export interface ImageAlt {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details36
}

export interface Details36 {
  items: any[]
  type: string
  headings: any[]
}

export interface HttpStatusCode {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
}

export interface MetaRefresh {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
}

export interface UnusedJavascript {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  displayValue: string
  details: Details37
  numericValue: number
  numericUnit: string
}

export interface Details37 {
  debugData: DebugData10
  overallSavingsBytes: number
  headings: Heading13[]
  sortedBy: string[]
  type: string
  overallSavingsMs: number
  items: Item16[]
}

export interface DebugData10 {
  metricSavings: MetricSavings7
  type: string
}

export interface MetricSavings7 {
  FCP: number
  LCP: number
}

export interface Heading13 {
  subItemsHeading: SubItemsHeading4
  label: string
  valueType: string
  key: string
}

export interface SubItemsHeading4 {
  key: string
  valueType?: string
}

export interface Item16 {
  wastedBytes: number
  url: string
  wastedPercent: number
  totalBytes: number
}

export interface NoUnloadListeners {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details38
}

export interface Details38 {
  headings: Heading14[]
  items: Item17[]
  type: string
}

export interface Heading14 {
  key: string
  label: string
  valueType: string
}

export interface Item17 {
  source: Source
}

export interface Source {
  urlProvider: string
  url: string
  line: number
  type: string
  column: number
}

export interface FrameTitle {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
}

export interface ImageRedundantAlt {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details39
}

export interface Details39 {
  items: any[]
  type: string
  headings: any[]
}

export interface UsesLongCacheTtl {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  displayValue: string
  details: Details40
  numericValue: number
  numericUnit: string
}

export interface Details40 {
  sortedBy: string[]
  items: Item18[]
  summary: Summary
  skipSumming: string[]
  type: string
  headings: Heading15[]
}

export interface Item18 {
  url: string
  cacheHitProbability: number
  debugData: DebugData11
  totalBytes: number
  wastedBytes: number
  cacheLifetimeMs: number
}

export interface DebugData11 {
  public: boolean
  "max-age": number
  type: string
}

export interface Summary {
  wastedBytes: number
}

export interface Heading15 {
  key: string
  label: string
  valueType: string
  displayUnit?: string
  granularity?: number
}

export interface Label {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details41
}

export interface Details41 {
  items: any[]
  type: string
  headings: any[]
}

export interface ModernImageFormats {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  displayValue: string
  details: Details42
  warnings: any[]
  numericValue: number
  numericUnit: string
}

export interface Details42 {
  type: string
  overallSavingsMs: number
  debugData: DebugData12
  sortedBy: string[]
  items: Item19[]
  overallSavingsBytes: number
  headings: Heading16[]
}

export interface DebugData12 {
  type: string
  metricSavings: MetricSavings8
}

export interface MetricSavings8 {
  FCP: number
  LCP: number
}

export interface Item19 {
  node: Node6
  totalBytes: number
  fromProtocol: boolean
  url: string
  wastedWebpBytes: number
  wastedBytes: number
  isCrossOrigin: boolean
}

export interface Node6 {
  selector: string
  snippet: string
  type: string
  boundingRect: BoundingRect6
  path: string
  lhId: string
  nodeLabel: string
}

export interface BoundingRect6 {
  bottom: number
  top: number
  width: number
  height: number
  left: number
  right: number
}

export interface Heading16 {
  valueType: string
  key: string
  label?: string
}

export interface InputButtonName {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
}

export interface DuplicateIdAria {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details43
}

export interface Details43 {
  items: any[]
  type: string
  headings: any[]
}

export interface UsesRelPreconnect {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  warnings: string[]
}

export interface LandmarkOneMain {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
}

export interface UserTimings {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
  displayValue: string
  details: Details44
}

export interface Details44 {
  items: Item20[]
  type: string
  headings: Heading17[]
}

export interface Item20 {
  name: string
  startTime: number
  duration?: number
  timingType: string
}

export interface Heading17 {
  valueType: string
  key: string
  label: string
  granularity?: number
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

export interface TableDuplicateName {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
}

export interface TapTargets {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
}

export interface MetaDescription {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
}

export interface SkipLink {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
}

export interface ThirdPartyFacades {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
}

export interface CrawlableAnchors {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details45
}

export interface Details45 {
  headings: any[]
  items: any[]
  type: string
}

export interface HeadingOrder {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details46
}

export interface Details46 {
  headings: any[]
  items: any[]
  type: string
}

export interface IsCrawlable {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details47
  warnings: any[]
}

export interface Details47 {
  type: string
  headings: any[]
  items: any[]
}

export interface EfficientAnimatedContent {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details48
  numericValue: number
  numericUnit: string
}

export interface Details48 {
  type: string
  sortedBy: string[]
  overallSavingsMs: number
  overallSavingsBytes: number
  items: any[]
  headings: any[]
  debugData: DebugData13
}

export interface DebugData13 {
  type: string
  metricSavings: MetricSavings9
}

export interface MetricSavings9 {
  FCP: number
  LCP: number
}

export interface List {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details49
}

export interface Details49 {
  items: any[]
  headings: any[]
  type: string
}

export interface AriaRoles {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details50
}

export interface Details50 {
  items: any[]
  headings: any[]
  type: string
}

export interface MainthreadWorkBreakdown {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  displayValue: string
  details: Details51
  numericValue: number
  numericUnit: string
}

export interface Details51 {
  headings: Heading18[]
  type: string
  items: Item21[]
  sortedBy: string[]
}

export interface Heading18 {
  valueType: string
  label: string
  key: string
  granularity?: number
}

export interface Item21 {
  groupLabel: string
  duration: number
  group: string
}

export interface BootupTime {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  displayValue: string
  details: Details52
  numericValue: number
  numericUnit: string
}

export interface Details52 {
  items: Item22[]
  type: string
  headings: Heading19[]
  summary: Summary2
  sortedBy: string[]
}

export interface Item22 {
  total: number
  scriptParseCompile: number
  url: string
  scripting: number
}

export interface Heading19 {
  valueType: string
  label: string
  key: string
  granularity?: number
}

export interface Summary2 {
  wastedMs: number
}

export interface ImageAspectRatio {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details53
}

export interface Details53 {
  items: any[]
  headings: any[]
  type: string
}

export interface Redirects {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details54
  numericValue: number
  numericUnit: string
}

export interface Details54 {
  items: any[]
  overallSavingsMs: number
  type: string
  headings: any[]
}

export interface AriaToggleFieldName {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
}

export interface Accesskeys {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
}

export interface UnsizedImages {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details55
}

export interface Details55 {
  type: string
  headings: Heading20[]
  items: Item23[]
}

export interface Heading20 {
  valueType: string
  key: string
  label?: string
}

export interface Item23 {
  node: Node7
  url: string
}

export interface Node7 {
  lhId: string
  nodeLabel: string
  boundingRect: BoundingRect7
  selector: string
  snippet: string
  type: string
  path: string
}

export interface BoundingRect7 {
  right: number
  bottom: number
  left: number
  top: number
  height: number
  width: number
}

export interface PastePreventingInputs {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details56
}

export interface Details56 {
  headings: any[]
  type: string
  items: any[]
}

export interface LcpLazyLoaded {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details57
}

export interface Details57 {
  type: string
  items: Item24[]
  headings: Heading21[]
}

export interface Item24 {
  node: Node8
}

export interface Node8 {
  lhId: string
  boundingRect: BoundingRect8
  snippet: string
  nodeLabel: string
  selector: string
  type: string
  path: string
}

export interface BoundingRect8 {
  top: number
  height: number
  left: number
  width: number
  bottom: number
  right: number
}

export interface Heading21 {
  valueType: string
  label: string
  key: string
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

export interface ManagedFocus {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
}

export interface CustomControlsLabels {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
}

export interface ErrorsInConsole {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details58
}

export interface Details58 {
  type: string
  items: any[]
  headings: any[]
}

export interface CustomControlsRoles {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
}

export interface LayoutShiftElements {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
  displayValue: string
  details: Details59
}

export interface Details59 {
  headings: Heading22[]
  type: string
  items: Item25[]
}

export interface Heading22 {
  valueType: string
  key: string
  label: string
  granularity?: number
}

export interface Item25 {
  score: number
  node: Node9
}

export interface Node9 {
  selector: string
  boundingRect: BoundingRect9
  nodeLabel: string
  lhId: string
  type: string
  snippet: string
  path: string
}

export interface BoundingRect9 {
  width: number
  right: number
  top: number
  bottom: number
  left: number
  height: number
}

export interface InspectorIssues {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details60
}

export interface Details60 {
  items: any[]
  headings: any[]
  type: string
}

export interface PreloadFonts {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
}

export interface Bypass {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
}

export interface Listitem {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details61
}

export interface Details61 {
  headings: any[]
  type: string
  items: any[]
}

export interface TdHasHeader {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
}

export interface Diagnostics {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
  details: Details62
}

export interface Details62 {
  items: Item26[]
  type: string
}

export interface Item26 {
  totalByteWeight: number
  numTasksOver10ms: number
  numTasksOver100ms: number
  numTasks: number
  maxRtt: number
  rtt: number
  numTasksOver50ms: number
  numFonts: number
  totalTaskTime: number
  throughput: number
  numRequests: number
  numStylesheets: number
  mainDocumentTransferSize: number
  numTasksOver500ms: number
  numScripts: number
  numTasksOver25ms: number
  maxServerLatency: number
}

export interface JsLibraries {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
  details: Details63
}

export interface Details63 {
  debugData: DebugData14
  type: string
  headings: Heading23[]
  items: Item27[]
}

export interface DebugData14 {
  stacks: Stack[]
  type: string
}

export interface Stack {
  id: string
  version: string
}

export interface Heading23 {
  key: string
  label: string
  valueType: string
}

export interface Item27 {
  npm: string
  name: string
  version: string
}

export interface HtmlHasLang {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details64
}

export interface Details64 {
  type: string
  headings: any[]
  items: any[]
}

export interface Doctype {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
}

export interface FontDisplay {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details65
  warnings: any[]
}

export interface Details65 {
  type: string
  headings: any[]
  items: any[]
}

export interface FocusableControls {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
}

export interface LargestContentfulPaintElement {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
  displayValue: string
  details: Details66
}

export interface Details66 {
  type: string
  items: Item28[]
}

export interface Item28 {
  items: Item29[]
  type: string
  headings: Heading24[]
}

export interface Item29 {
  node?: Node10
  percent?: string
  timing?: number
  phase?: string
}

export interface Node10 {
  boundingRect: BoundingRect10
  type: string
  snippet: string
  path: string
  lhId: string
  selector: string
  nodeLabel: string
}

export interface BoundingRect10 {
  left: number
  width: number
  right: number
  top: number
  bottom: number
  height: number
}

export interface Heading24 {
  valueType: string
  key: string
  label: string
}

export interface AriaRequiredChildren {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
}

export interface AriaText {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
}

export interface DuplicateIdActive {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
}

export interface ScreenshotThumbnails {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
  details: Details67
}

export interface Details67 {
  type: string
  scale: number
  items: Item30[]
}

export interface Item30 {
  data: string
  timing: number
  timestamp: number
}

export interface StructuredData {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
}

export interface TableFakeCaption {
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
  details: Details68
  warnings: any[]
  numericValue: number
  numericUnit: string
}

export interface Details68 {
  items: any[]
  overallSavingsBytes: number
  headings: any[]
  sortedBy: string[]
  overallSavingsMs: number
  debugData: DebugData15
  type: string
}

export interface DebugData15 {
  type: string
  metricSavings: MetricSavings10
}

export interface MetricSavings10 {
  FCP: number
  LCP: number
}

export interface PrioritizeLcpImage {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details69
  numericValue: number
  numericUnit: string
}

export interface Details69 {
  overallSavingsMs: number
  sortedBy: string[]
  debugData: DebugData16
  items: any[]
  type: string
  headings: any[]
}

export interface DebugData16 {
  initiatorPath: InitiatorPath[]
  type: string
  pathLength: number
}

export interface InitiatorPath {
  initiatorType: string
  url: string
}

export interface HtmlXmlLangMismatch {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
}

export interface Charset {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
}

export interface FocusTraps {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
}

export interface AriaRequiredParent {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
}

export interface AriaTooltipName {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
}

export interface CspXss {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
  details: Details70
}

export interface Details70 {
  type: string
  items: any[]
  headings: any[]
}

export interface UsesRelPreload {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
  details: Details71
}

export interface Details71 {
  items: any[]
  overallSavingsMs: number
  headings: any[]
  type: string
}

export interface LinkInTextBlock {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details72
}

export interface Details72 {
  headings: any[]
  items: any[]
  type: string
}

export interface ScriptTreemapData {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
  details: Details73
}

export interface Details73 {
  nodes: Node11[]
  type: string
}

export interface Node11 {
  children?: Children4[]
  name: string
  resourceBytes: number
  unusedBytes?: number
}

export interface Children4 {
  name: string
  unusedBytes: number
  resourceBytes: number
}

export interface AriaMeterName {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
}

export interface NonCompositedAnimations {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
  details: Details74
}

export interface Details74 {
  headings: any[]
  type: string
  items: any[]
}

export interface AriaProgressbarName {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
}

export interface HtmlLangValid {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details75
}

export interface Details75 {
  type: string
  items: any[]
  headings: any[]
}

export interface LongTasks {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
  displayValue: string
  details: Details76
}

export interface Details76 {
  headings: Heading25[]
  skipSumming: string[]
  items: Item31[]
  type: string
  debugData: DebugData17
  sortedBy: string[]
}

export interface Heading25 {
  valueType: string
  label: string
  key: string
  granularity?: number
}

export interface Item31 {
  startTime: number
  duration: number
  url: string
}

export interface DebugData17 {
  type: string
  tasks: Task[]
  urls: string[]
}

export interface Task {
  urlIndex: number
  scriptEvaluation: number
  startTime: number
  other: number
  duration: number
  styleLayout?: number
  paintCompositeRender?: number
}

export interface NotificationOnStart {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details77
}

export interface Details77 {
  items: any[]
  type: string
  headings: any[]
}

export interface AriaDialogName {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
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

export interface ThHasDataCells {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
}

export interface GeolocationOnStart {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details78
}

export interface Details78 {
  headings: any[]
  items: any[]
  type: string
}

export interface Plugins {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details79
}

export interface Details79 {
  items: any[]
  type: string
  headings: any[]
}

export interface NetworkServerLatency {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
  displayValue: string
  details: Details80
  numericValue: number
  numericUnit: string
}

export interface Details80 {
  headings: Heading26[]
  type: string
  sortedBy: string[]
  items: Item32[]
}

export interface Heading26 {
  key: string
  valueType: string
  label: string
  granularity?: number
}

export interface Item32 {
  serverResponseTime: number
  origin: string
}

export interface AriaHiddenBody {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details81
}

export interface Details81 {
  type: string
  items: any[]
  headings: any[]
}

export interface TargetSize {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
}

export interface UsesTextCompression {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details82
  numericValue: number
  numericUnit: string
}

export interface Details82 {
  sortedBy: string[]
  overallSavingsBytes: number
  overallSavingsMs: number
  headings: any[]
  type: string
  debugData: DebugData18
  items: any[]
}

export interface DebugData18 {
  metricSavings: MetricSavings11
  type: string
}

export interface MetricSavings11 {
  LCP: number
  FCP: number
}

export interface RenderBlockingResources {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  displayValue: string
  details: Details83
  numericValue: number
  numericUnit: string
}

export interface Details83 {
  items: Item33[]
  type: string
  headings: Heading27[]
  overallSavingsMs: number
}

export interface Item33 {
  wastedMs: number
  url: string
  totalBytes: number
}

export interface Heading27 {
  key: string
  valueType: string
  label: string
}

export interface DuplicatedJavascript {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details84
  numericValue: number
  numericUnit: string
}

export interface Details84 {
  type: string
  overallSavingsBytes: number
  overallSavingsMs: number
  sortedBy: string[]
  headings: any[]
  items: any[]
  debugData: DebugData19
}

export interface DebugData19 {
  type: string
  metricSavings: MetricSavings12
}

export interface MetricSavings12 {
  LCP: number
  FCP: number
}

export interface NoDocumentWrite {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  details: Details85
}

export interface Details85 {
  headings: any[]
  items: any[]
  type: string
}

export interface MainThreadTasks {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
  details: Details86
}

export interface Details86 {
  type: string
  items: Item34[]
  headings: Heading28[]
}

export interface Item34 {
  startTime: number
  duration: number
}

export interface Heading28 {
  key: string
  granularity: number
  valueType: string
  label: string
}

export interface ThirdPartySummary {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  displayValue: string
  details: Details87
}

export interface Details87 {
  headings: Heading29[]
  summary: Summary3
  type: string
  isEntityGrouped: boolean
  items: Item35[]
}

export interface Heading29 {
  valueType: string
  subItemsHeading: SubItemsHeading5
  key: string
  label: string
  granularity?: number
}

export interface SubItemsHeading5 {
  valueType?: string
  key: string
}

export interface Summary3 {
  wastedBytes: number
  wastedMs: number
}

export interface Item35 {
  mainThreadTime: number
  entity: string
  subItems: SubItems2
  blockingTime: number
  transferSize: number
}

export interface SubItems2 {
  items: Item36[]
  type: string
}

export interface Item36 {
  mainThreadTime?: number
  transferSize: number
  blockingTime: number
  url: string
}

export interface IdenticalLinksSamePurpose {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
  details: Details88
}

export interface Details88 {
  debugData: DebugData20
  headings: Heading30[]
  items: Item37[]
  type: string
}

export interface DebugData20 {
  tags: string[]
  impact: string
  type: string
}

export interface Heading30 {
  subItemsHeading: SubItemsHeading6
  label: string
  valueType: string
  key: string
}

export interface SubItemsHeading6 {
  key: string
  valueType: string
}

export interface Item37 {
  subItems: SubItems3
  node: Node12
}

export interface SubItems3 {
  type: string
  items: Item38[]
}

export interface Item38 {
  relatedNode: RelatedNode
}

export interface RelatedNode {
  lhId: string
  boundingRect: BoundingRect11
  path: string
  type: string
  selector: string
  snippet: string
  nodeLabel: string
}

export interface BoundingRect11 {
  bottom: number
  height: number
  right: number
  width: number
  left: number
  top: number
}

export interface Node12 {
  path: string
  lhId: string
  boundingRect: BoundingRect12
  snippet: string
  nodeLabel: string
  explanation: string
  type: string
  selector: string
}

export interface BoundingRect12 {
  right: number
  width: number
  height: number
  left: number
  bottom: number
  top: number
}

export interface TdHeadersAttr {
  id: string
  title: string
  description: string
  score: any
  scoreDisplayMode: string
}

export interface Categories {
  performance: Performance
  accessibility: Accessibility
  "best-practices": BestPractices
  seo: Seo
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

export interface Accessibility {
  id: string
  title: string
  description: string
  score: number
  manualDescription: string
  auditRefs: AuditRef2[]
}

export interface AuditRef2 {
  id: string
  weight: number
  group?: string
}

export interface BestPractices {
  id: string
  title: string
  score: number
  auditRefs: AuditRef3[]
}

export interface AuditRef3 {
  id: string
  weight: number
  group: string
}

export interface Seo {
  id: string
  title: string
  description: string
  score: number
  manualDescription: string
  auditRefs: AuditRef4[]
}

export interface AuditRef4 {
  id: string
  weight: number
  group?: string
}

export interface CategoryGroups {
  budgets: Budgets
  "best-practices-general": BestPracticesGeneral
  "best-practices-browser-compat": BestPracticesBrowserCompat
  "a11y-audio-video": A11yAudioVideo
  "a11y-tables-lists": A11yTablesLists
  metrics: Metrics4
  "a11y-aria": A11yAria
  diagnostics: Diagnostics2
  "seo-crawl": SeoCrawl
  "best-practices-ux": BestPracticesUx
  "a11y-best-practices": A11yBestPractices
  "pwa-installable": PwaInstallable
  "a11y-language": A11yLanguage
  "a11y-names-labels": A11yNamesLabels
  "a11y-color-contrast": A11yColorContrast
  "pwa-optimized": PwaOptimized
  "a11y-navigation": A11yNavigation
  "seo-content": SeoContent
  "best-practices-trust-safety": BestPracticesTrustSafety
  "seo-mobile": SeoMobile
  "load-opportunities": LoadOpportunities
}

export interface Budgets {
  title: string
  description: string
}

export interface BestPracticesGeneral {
  title: string
}

export interface BestPracticesBrowserCompat {
  title: string
}

export interface A11yAudioVideo {
  title: string
  description: string
}

export interface A11yTablesLists {
  title: string
  description: string
}

export interface Metrics4 {
  title: string
}

export interface A11yAria {
  title: string
  description: string
}

export interface Diagnostics2 {
  title: string
  description: string
}

export interface SeoCrawl {
  title: string
  description: string
}

export interface BestPracticesUx {
  title: string
}

export interface A11yBestPractices {
  title: string
  description: string
}

export interface PwaInstallable {
  title: string
}

export interface A11yLanguage {
  title: string
  description: string
}

export interface A11yNamesLabels {
  title: string
  description: string
}

export interface A11yColorContrast {
  title: string
  description: string
}

export interface PwaOptimized {
  title: string
}

export interface A11yNavigation {
  title: string
  description: string
}

export interface SeoContent {
  title: string
  description: string
}

export interface BestPracticesTrustSafety {
  title: string
}

export interface SeoMobile {
  title: string
  description: string
}

export interface LoadOpportunities {
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
  nodes: Nodes
  screenshot: Screenshot
}

export interface Nodes {
  "1-210-A": N1210A
  "1-14-A": N114A
  "1-119-A": N1119A
  "1-92-A": N192A
  "1-207-A": N1207A
  "1-190-A": N1190A
  "1-52-A": N152A
  "1-39-A": N139A
  "1-179-A": N1179A
  "1-279-LINK": N1279Link
  "1-157-A": N1157A
  "1-213-FORM": N1213Form
  "1-43-A": N143A
  "1-181-A": N1181A
  "1-206-A": N1206A
  "page-7-DIV": Page7Div
  "1-196-A": N1196A
  "1-88-A": N188A
  "1-306-META": N1306Meta
  "1-5-A": N15A
  "1-286-META": N1286Meta
  "1-103-A": N1103A
  "1-124-A": N1124A
  "1-59-A": N159A
  "1-128-A": N1128A
  "1-163-A": N1163A
  "1-86-A": N186A
  "1-174-A": N1174A
  "1-304-META": N1304Meta
  "1-63-A": N163A
  "1-166-A": N1166A
  "1-2-A": N12A
  "1-67-A": N167A
  "1-144-A": N1144A
  "1-229-IMG": N1229Img
  "1-106-A": N1106A
  "1-287-META": N1287Meta
  "1-0-A": N10A
  "1-139-A": N1139A
  "1-165-A": N1165A
  "1-195-A": N1195A
  "1-272-LINK": N1272Link
  "1-68-A": N168A
  "1-265-LINK": N1265Link
  "1-25-A": N125A
  "1-84-A": N184A
  "1-153-A": N1153A
  "1-13-DIV": N113Div
  "1-290-META": N1290Meta
  "1-305-META": N1305Meta
  "1-51-A": N151A
  "1-135-A": N1135A
  "1-27-A": N127A
  "1-6-A": N16A
  "1-140-A": N1140A
  "1-54-A": N154A
  "page-4-DIV": Page4Div
  "1-126-A": N1126A
  "1-56-A": N156A
  "1-148-A": N1148A
  "1-44-A": N144A
  "1-137-A": N1137A
  "1-256-LINK": N1256Link
  "1-270-LINK": N1270Link
  "1-31-A": N131A
  "page-1-SECTION": Page1Section
  "1-284-LINK": N1284Link
  "1-169-A": N1169A
  "1-171-A": N1171A
  "1-154-A": N1154A
  "1-151-A": N1151A
  "1-41-A": N141A
  "1-178-A": N1178A
  "1-191-A": N1191A
  "1-180-A": N1180A
  "1-282-LINK": N1282Link
  "1-253-LINK": N1253Link
  "1-138-A": N1138A
  "1-37-A": N137A
  "1-222-IMG": N1222Img
  "1-71-A": N171A
  "1-159-A": N1159A
  "1-109-A": N1109A
  "1-130-A": N1130A
  "1-87-A": N187A
  "1-219-IMG": N1219Img
  "page-3-H3": Page3H3
  "1-46-A": N146A
  "1-248-IMG": N1248Img
  "1-24-A": N124A
  "1-247-IMG": N1247Img
  "1-42-A": N142A
  "1-268-LINK": N1268Link
  "1-185-A": N1185A
  "1-117-A": N1117A
  "1-160-A": N1160A
  "1-264-LINK": N1264Link
  "1-244-IMG": N1244Img
  "1-261-LINK": N1261Link
  "1-64-A": N164A
  "1-29-A": N129A
  "1-94-A": N194A
  "1-70-A": N170A
  "1-300-META": N1300Meta
  "1-293-META": N1293Meta
  "1-69-A": N169A
  "1-101-A": N1101A
  "1-271-LINK": N1271Link
  "1-123-A": N1123A
  "1-102-A": N1102A
  "1-50-A": N150A
  "1-136-A": N1136A
  "1-277-LINK": N1277Link
  "1-201-A": N1201A
  "1-170-A": N1170A
  "1-83-A": N183A
  "1-294-META": N1294Meta
  "1-255-LINK": N1255Link
  "1-275-LINK": N1275Link
  "1-295-META": N1295Meta
  "1-161-A": N1161A
  "1-204-A": N1204A
  "1-158-A": N1158A
  "1-17-A": N117A
  "1-209-A": N1209A
  "1-3-A": N13A
  "1-28-A": N128A
  "1-53-A": N153A
  "1-278-LINK": N1278Link
  "1-15-A": N115A
  "1-257-LINK": N1257Link
  "1-232-IMG": N1232Img
  "1-147-A": N1147A
  "1-231-IMG": N1231Img
  "1-33-A": N133A
  "1-285-LINK": N1285Link
  "1-246-IMG": N1246Img
  "1-187-A": N1187A
  "1-176-A": N1176A
  "1-57-A": N157A
  "1-11-LI": N111Li
  "1-19-A": N119A
  "1-146-A": N1146A
  "1-73-A": N173A
  "1-276-LINK": N1276Link
  "1-81-A": N181A
  "1-199-A": N1199A
  "1-20-A": N120A
  "1-162-A": N1162A
  "1-96-A": N196A
  "1-72-A": N172A
  "1-149-A": N1149A
  "1-251-LINK": N1251Link
  "1-118-A": N1118A
  "1-7-A": N17A
  "1-173-A": N1173A
  "1-224-IMG": N1224Img
  "1-152-A": N1152A
  "1-203-A": N1203A
  "1-249-IMG": N1249Img
  "1-95-A": N195A
  "1-32-A": N132A
  "1-112-A": N1112A
  "1-4-A": N14A
  "1-303-META": N1303Meta
  "page-0-IMG": Page0Img
  "1-245-IMG": N1245Img
  "1-164-A": N1164A
  "1-211-DIV": N1211Div
  "page-6-DEVSITE-PROGRESS": Page6DevsiteProgress
  "1-35-A": N135A
  "1-273-LINK": N1273Link
  "1-55-A": N155A
  "1-266-LINK": N1266Link
  "1-289-META": N1289Meta
  "1-47-A": N147A
  "1-208-A": N1208A
  "1-254-LINK": N1254Link
  "1-156-A": N1156A
  "1-235-IMG": N1235Img
  "1-227-IMG": N1227Img
  "1-141-A": N1141A
  "1-238-IMG": N1238Img
  "1-22-A": N122A
  "1-89-A": N189A
  "1-269-LINK": N1269Link
  "1-21-A": N121A
  "1-292-META": N1292Meta
  "1-299-META": N1299Meta
  "1-200-A": N1200A
  "1-145-A": N1145A
  "1-142-A": N1142A
  "1-61-A": N161A
  "1-281-LINK": N1281Link
  "1-76-A": N176A
  "1-186-A": N1186A
  "1-114-A": N1114A
  "1-121-A": N1121A
  "1-283-LINK": N1283Link
  "1-98-A": N198A
  "1-296-META": N1296Meta
  "1-108-A": N1108A
  "1-183-A": N1183A
  "1-10-DEVSITE-LANGUAGE-SELECTOR": N110DevsiteLanguageSelector
  "1-274-LINK": N1274Link
  "1-192-A": N1192A
  "1-143-A": N1143A
  "1-226-IMG": N1226Img
  "1-12-A": N112A
  "1-100-A": N1100A
  "1-131-A": N1131A
  "1-78-A": N178A
  "1-225-IMG": N1225Img
  "1-263-LINK": N1263Link
  "1-202-A": N1202A
  "1-291-META": N1291Meta
  "1-193-A": N1193A
  "1-65-A": N165A
  "1-189-A": N1189A
  "1-267-LINK": N1267Link
  "1-252-LINK": N1252Link
  "1-77-A": N177A
  "1-80-A": N180A
  "1-132-A": N1132A
  "1-120-A": N1120A
  "1-230-IMG": N1230Img
  "1-215-INPUT": N1215Input
  "1-250-LINK": N1250Link
  "1-259-LINK": N1259Link
  "1-18-A": N118A
  "1-49-A": N149A
  "1-205-A": N1205A
  "1-122-A": N1122A
  "1-194-A": N1194A
  "1-262-LINK": N1262Link
  "1-79-A": N179A
  "1-197-A": N1197A
  "1-168-A": N1168A
  "1-214-INPUT": N1214Input
  "1-16-A": N116A
  "1-258-LINK": N1258Link
  "1-239-IMG": N1239Img
  "1-241-IMG": N1241Img
  "1-60-A": N160A
  "1-90-A": N190A
  "1-223-IMG": N1223Img
  "1-298-META": N1298Meta
  "1-243-IMG": N1243Img
  "1-45-A": N145A
  "1-93-A": N193A
  "1-105-A": N1105A
  "1-113-A": N1113A
  "1-234-IMG": N1234Img
  "1-198-A": N1198A
  "1-104-A": N1104A
  "1-228-IMG": N1228Img
  "1-134-A": N1134A
  "1-34-A": N134A
  "1-26-A": N126A
  "1-62-A": N162A
  "1-172-A": N1172A
  "1-155-A": N1155A
  "page-5-DIV": Page5Div
  "1-85-A": N185A
  "1-233-IMG": N1233Img
  "1-66-A": N166A
  "1-74-A": N174A
  "1-217-IMG": N1217Img
  "1-82-A": N182A
  "1-91-A": N191A
  "page-2-DIV": Page2Div
  "1-182-A": N1182A
  "1-218-IMG": N1218Img
  "1-220-IMG": N1220Img
  "1-36-A": N136A
  "1-23-A": N123A
  "1-302-META": N1302Meta
  "1-150-A": N1150A
  "1-8-A": N18A
  "1-99-A": N199A
  "1-30-A": N130A
  "1-237-IMG": N1237Img
  "1-111-A": N1111A
  "1-125-A": N1125A
  "1-221-IMG": N1221Img
  "1-184-A": N1184A
  "1-58-A": N158A
  "1-38-A": N138A
  "1-242-IMG": N1242Img
  "1-280-LINK": N1280Link
  "1-1-A": N11A
  "1-297-META": N1297Meta
  "1-97-A": N197A
  "1-188-A": N1188A
  "1-127-A": N1127A
  "1-175-A": N1175A
  "1-116-A": N1116A
  "1-236-IMG": N1236Img
  "1-48-A": N148A
  "1-115-A": N1115A
  "1-216-IMG": N1216Img
  "1-260-LINK": N1260Link
  "1-133-A": N1133A
  "1-40-A": N140A
  "1-177-A": N1177A
  "1-129-A": N1129A
  "1-107-A": N1107A
  "1-301-META": N1301Meta
  "1-240-IMG": N1240Img
  "1-288-META": N1288Meta
  "1-9-A": N19A
  "1-75-A": N175A
  "1-167-A": N1167A
  "1-110-A": N1110A
  "1-212-UL": N1212Ul
}

export interface N1210A {
  left: number
  right: number
  height: number
  top: number
  width: number
  bottom: number
}

export interface N114A {
  bottom: number
  height: number
  right: number
  left: number
  width: number
  top: number
}

export interface N1119A {
  width: number
  bottom: number
  right: number
  height: number
  top: number
  left: number
}

export interface N192A {
  left: number
  width: number
  right: number
  height: number
  bottom: number
  top: number
}

export interface N1207A {
  right: number
  top: number
  width: number
  height: number
  bottom: number
  left: number
}

export interface N1190A {
  width: number
  right: number
  bottom: number
  height: number
  top: number
  left: number
}

export interface N152A {
  width: number
  bottom: number
  right: number
  top: number
  left: number
  height: number
}

export interface N139A {
  right: number
  top: number
  width: number
  bottom: number
  height: number
  left: number
}

export interface N1179A {
  height: number
  bottom: number
  width: number
  right: number
  left: number
  top: number
}

export interface N1279Link {
  height: number
  width: number
  top: number
  bottom: number
  right: number
  left: number
}

export interface N1157A {
  left: number
  width: number
  top: number
  height: number
  bottom: number
  right: number
}

export interface N1213Form {
  top: number
  bottom: number
  height: number
  right: number
  left: number
  width: number
}

export interface N143A {
  height: number
  top: number
  bottom: number
  left: number
  width: number
  right: number
}

export interface N1181A {
  left: number
  width: number
  bottom: number
  right: number
  top: number
  height: number
}

export interface N1206A {
  left: number
  top: number
  height: number
  bottom: number
  right: number
  width: number
}

export interface Page7Div {
  right: number
  height: number
  width: number
  top: number
  left: number
  bottom: number
}

export interface N1196A {
  height: number
  left: number
  bottom: number
  right: number
  top: number
  width: number
}

export interface N188A {
  right: number
  bottom: number
  left: number
  top: number
  height: number
  width: number
}

export interface N1306Meta {
  bottom: number
  top: number
  height: number
  right: number
  width: number
  left: number
}

export interface N15A {
  left: number
  bottom: number
  top: number
  width: number
  height: number
  right: number
}

export interface N1286Meta {
  bottom: number
  left: number
  height: number
  width: number
  right: number
  top: number
}

export interface N1103A {
  bottom: number
  height: number
  top: number
  width: number
  left: number
  right: number
}

export interface N1124A {
  top: number
  width: number
  right: number
  bottom: number
  left: number
  height: number
}

export interface N159A {
  top: number
  left: number
  width: number
  height: number
  bottom: number
  right: number
}

export interface N1128A {
  width: number
  left: number
  height: number
  right: number
  bottom: number
  top: number
}

export interface N1163A {
  width: number
  left: number
  height: number
  top: number
  right: number
  bottom: number
}

export interface N186A {
  width: number
  top: number
  right: number
  left: number
  height: number
  bottom: number
}

export interface N1174A {
  bottom: number
  top: number
  left: number
  width: number
  height: number
  right: number
}

export interface N1304Meta {
  width: number
  bottom: number
  right: number
  height: number
  left: number
  top: number
}

export interface N163A {
  left: number
  height: number
  width: number
  right: number
  bottom: number
  top: number
}

export interface N1166A {
  top: number
  left: number
  height: number
  bottom: number
  right: number
  width: number
}

export interface N12A {
  right: number
  left: number
  bottom: number
  top: number
  height: number
  width: number
}

export interface N167A {
  width: number
  bottom: number
  left: number
  top: number
  right: number
  height: number
}

export interface N1144A {
  width: number
  height: number
  right: number
  bottom: number
  top: number
  left: number
}

export interface N1229Img {
  bottom: number
  width: number
  height: number
  right: number
  top: number
  left: number
}

export interface N1106A {
  right: number
  bottom: number
  height: number
  left: number
  width: number
  top: number
}

export interface N1287Meta {
  top: number
  left: number
  bottom: number
  right: number
  width: number
  height: number
}

export interface N10A {
  right: number
  width: number
  left: number
  top: number
  bottom: number
  height: number
}

export interface N1139A {
  right: number
  left: number
  width: number
  top: number
  height: number
  bottom: number
}

export interface N1165A {
  width: number
  right: number
  height: number
  bottom: number
  left: number
  top: number
}

export interface N1195A {
  bottom: number
  right: number
  left: number
  height: number
  width: number
  top: number
}

export interface N1272Link {
  left: number
  bottom: number
  right: number
  height: number
  width: number
  top: number
}

export interface N168A {
  height: number
  right: number
  width: number
  top: number
  left: number
  bottom: number
}

export interface N1265Link {
  height: number
  width: number
  left: number
  right: number
  bottom: number
  top: number
}

export interface N125A {
  left: number
  bottom: number
  right: number
  height: number
  top: number
  width: number
}

export interface N184A {
  width: number
  right: number
  height: number
  bottom: number
  left: number
  top: number
}

export interface N1153A {
  width: number
  height: number
  left: number
  right: number
  top: number
  bottom: number
}

export interface N113Div {
  width: number
  top: number
  height: number
  bottom: number
  left: number
  right: number
}

export interface N1290Meta {
  bottom: number
  left: number
  width: number
  top: number
  right: number
  height: number
}

export interface N1305Meta {
  left: number
  bottom: number
  width: number
  height: number
  right: number
  top: number
}

export interface N151A {
  width: number
  left: number
  bottom: number
  top: number
  height: number
  right: number
}

export interface N1135A {
  right: number
  width: number
  top: number
  height: number
  bottom: number
  left: number
}

export interface N127A {
  top: number
  bottom: number
  width: number
  height: number
  right: number
  left: number
}

export interface N16A {
  left: number
  right: number
  top: number
  width: number
  height: number
  bottom: number
}

export interface N1140A {
  height: number
  bottom: number
  width: number
  top: number
  right: number
  left: number
}

export interface N154A {
  left: number
  width: number
  bottom: number
  height: number
  right: number
  top: number
}

export interface Page4Div {
  right: number
  bottom: number
  width: number
  top: number
  height: number
  left: number
}

export interface N1126A {
  bottom: number
  height: number
  right: number
  left: number
  top: number
  width: number
}

export interface N156A {
  right: number
  height: number
  bottom: number
  top: number
  left: number
  width: number
}

export interface N1148A {
  height: number
  bottom: number
  left: number
  right: number
  top: number
  width: number
}

export interface N144A {
  top: number
  height: number
  bottom: number
  right: number
  left: number
  width: number
}

export interface N1137A {
  width: number
  height: number
  left: number
  top: number
  bottom: number
  right: number
}

export interface N1256Link {
  bottom: number
  height: number
  left: number
  right: number
  top: number
  width: number
}

export interface N1270Link {
  bottom: number
  right: number
  width: number
  left: number
  height: number
  top: number
}

export interface N131A {
  bottom: number
  width: number
  height: number
  right: number
  left: number
  top: number
}

export interface Page1Section {
  bottom: number
  top: number
  width: number
  right: number
  left: number
  height: number
}

export interface N1284Link {
  width: number
  bottom: number
  height: number
  right: number
  top: number
  left: number
}

export interface N1169A {
  bottom: number
  left: number
  width: number
  top: number
  height: number
  right: number
}

export interface N1171A {
  height: number
  width: number
  bottom: number
  left: number
  top: number
  right: number
}

export interface N1154A {
  left: number
  right: number
  top: number
  width: number
  height: number
  bottom: number
}

export interface N1151A {
  width: number
  height: number
  left: number
  top: number
  bottom: number
  right: number
}

export interface N141A {
  width: number
  bottom: number
  right: number
  left: number
  height: number
  top: number
}

export interface N1178A {
  top: number
  bottom: number
  width: number
  height: number
  left: number
  right: number
}

export interface N1191A {
  width: number
  height: number
  left: number
  bottom: number
  right: number
  top: number
}

export interface N1180A {
  width: number
  right: number
  top: number
  height: number
  left: number
  bottom: number
}

export interface N1282Link {
  right: number
  top: number
  height: number
  bottom: number
  left: number
  width: number
}

export interface N1253Link {
  width: number
  left: number
  height: number
  bottom: number
  top: number
  right: number
}

export interface N1138A {
  height: number
  top: number
  left: number
  bottom: number
  width: number
  right: number
}

export interface N137A {
  top: number
  bottom: number
  right: number
  left: number
  height: number
  width: number
}

export interface N1222Img {
  width: number
  bottom: number
  left: number
  top: number
  right: number
  height: number
}

export interface N171A {
  width: number
  left: number
  bottom: number
  height: number
  right: number
  top: number
}

export interface N1159A {
  right: number
  left: number
  height: number
  bottom: number
  width: number
  top: number
}

export interface N1109A {
  right: number
  width: number
  height: number
  left: number
  top: number
  bottom: number
}

export interface N1130A {
  bottom: number
  top: number
  left: number
  height: number
  right: number
  width: number
}

export interface N187A {
  top: number
  height: number
  bottom: number
  right: number
  width: number
  left: number
}

export interface N1219Img {
  left: number
  height: number
  right: number
  top: number
  width: number
  bottom: number
}

export interface Page3H3 {
  width: number
  left: number
  height: number
  right: number
  bottom: number
  top: number
}

export interface N146A {
  height: number
  width: number
  right: number
  left: number
  bottom: number
  top: number
}

export interface N1248Img {
  left: number
  width: number
  top: number
  bottom: number
  height: number
  right: number
}

export interface N124A {
  height: number
  left: number
  top: number
  bottom: number
  width: number
  right: number
}

export interface N1247Img {
  right: number
  width: number
  left: number
  height: number
  bottom: number
  top: number
}

export interface N142A {
  top: number
  bottom: number
  height: number
  width: number
  left: number
  right: number
}

export interface N1268Link {
  right: number
  left: number
  height: number
  top: number
  bottom: number
  width: number
}

export interface N1185A {
  right: number
  bottom: number
  top: number
  height: number
  left: number
  width: number
}

export interface N1117A {
  left: number
  bottom: number
  right: number
  width: number
  top: number
  height: number
}

export interface N1160A {
  width: number
  bottom: number
  right: number
  height: number
  left: number
  top: number
}

export interface N1264Link {
  bottom: number
  width: number
  right: number
  left: number
  height: number
  top: number
}

export interface N1244Img {
  right: number
  top: number
  width: number
  height: number
  bottom: number
  left: number
}

export interface N1261Link {
  bottom: number
  right: number
  left: number
  top: number
  height: number
  width: number
}

export interface N164A {
  bottom: number
  height: number
  width: number
  right: number
  left: number
  top: number
}

export interface N129A {
  right: number
  width: number
  left: number
  top: number
  bottom: number
  height: number
}

export interface N194A {
  height: number
  bottom: number
  top: number
  right: number
  width: number
  left: number
}

export interface N170A {
  height: number
  top: number
  bottom: number
  left: number
  right: number
  width: number
}

export interface N1300Meta {
  bottom: number
  top: number
  width: number
  height: number
  left: number
  right: number
}

export interface N1293Meta {
  right: number
  top: number
  left: number
  height: number
  bottom: number
  width: number
}

export interface N169A {
  width: number
  right: number
  left: number
  top: number
  bottom: number
  height: number
}

export interface N1101A {
  height: number
  left: number
  bottom: number
  width: number
  top: number
  right: number
}

export interface N1271Link {
  width: number
  top: number
  right: number
  left: number
  bottom: number
  height: number
}

export interface N1123A {
  height: number
  width: number
  right: number
  left: number
  top: number
  bottom: number
}

export interface N1102A {
  top: number
  width: number
  left: number
  bottom: number
  height: number
  right: number
}

export interface N150A {
  right: number
  width: number
  top: number
  height: number
  bottom: number
  left: number
}

export interface N1136A {
  width: number
  bottom: number
  top: number
  right: number
  height: number
  left: number
}

export interface N1277Link {
  width: number
  top: number
  height: number
  left: number
  right: number
  bottom: number
}

export interface N1201A {
  top: number
  left: number
  height: number
  right: number
  bottom: number
  width: number
}

export interface N1170A {
  right: number
  left: number
  width: number
  top: number
  bottom: number
  height: number
}

export interface N183A {
  bottom: number
  width: number
  right: number
  top: number
  left: number
  height: number
}

export interface N1294Meta {
  width: number
  bottom: number
  top: number
  left: number
  right: number
  height: number
}

export interface N1255Link {
  left: number
  height: number
  width: number
  right: number
  top: number
  bottom: number
}

export interface N1275Link {
  right: number
  left: number
  bottom: number
  width: number
  height: number
  top: number
}

export interface N1295Meta {
  width: number
  left: number
  right: number
  height: number
  bottom: number
  top: number
}

export interface N1161A {
  left: number
  height: number
  right: number
  top: number
  bottom: number
  width: number
}

export interface N1204A {
  right: number
  bottom: number
  width: number
  left: number
  top: number
  height: number
}

export interface N1158A {
  left: number
  right: number
  bottom: number
  height: number
  top: number
  width: number
}

export interface N117A {
  height: number
  bottom: number
  left: number
  top: number
  width: number
  right: number
}

export interface N1209A {
  height: number
  top: number
  bottom: number
  left: number
  width: number
  right: number
}

export interface N13A {
  top: number
  left: number
  width: number
  height: number
  bottom: number
  right: number
}

export interface N128A {
  height: number
  top: number
  width: number
  left: number
  bottom: number
  right: number
}

export interface N153A {
  right: number
  height: number
  bottom: number
  top: number
  width: number
  left: number
}

export interface N1278Link {
  bottom: number
  right: number
  left: number
  width: number
  top: number
  height: number
}

export interface N115A {
  bottom: number
  top: number
  height: number
  right: number
  left: number
  width: number
}

export interface N1257Link {
  right: number
  bottom: number
  top: number
  left: number
  width: number
  height: number
}

export interface N1232Img {
  top: number
  left: number
  height: number
  right: number
  width: number
  bottom: number
}

export interface N1147A {
  width: number
  right: number
  top: number
  left: number
  bottom: number
  height: number
}

export interface N1231Img {
  right: number
  height: number
  left: number
  top: number
  bottom: number
  width: number
}

export interface N133A {
  right: number
  bottom: number
  left: number
  width: number
  top: number
  height: number
}

export interface N1285Link {
  top: number
  left: number
  bottom: number
  height: number
  width: number
  right: number
}

export interface N1246Img {
  width: number
  right: number
  height: number
  top: number
  left: number
  bottom: number
}

export interface N1187A {
  top: number
  bottom: number
  width: number
  left: number
  right: number
  height: number
}

export interface N1176A {
  top: number
  right: number
  width: number
  left: number
  bottom: number
  height: number
}

export interface N157A {
  right: number
  bottom: number
  width: number
  top: number
  left: number
  height: number
}

export interface N111Li {
  width: number
  bottom: number
  left: number
  height: number
  right: number
  top: number
}

export interface N119A {
  bottom: number
  top: number
  right: number
  height: number
  width: number
  left: number
}

export interface N1146A {
  width: number
  bottom: number
  left: number
  right: number
  height: number
  top: number
}

export interface N173A {
  left: number
  bottom: number
  height: number
  right: number
  top: number
  width: number
}

export interface N1276Link {
  right: number
  height: number
  width: number
  bottom: number
  left: number
  top: number
}

export interface N181A {
  height: number
  top: number
  left: number
  width: number
  right: number
  bottom: number
}

export interface N1199A {
  height: number
  bottom: number
  right: number
  width: number
  top: number
  left: number
}

export interface N120A {
  right: number
  height: number
  bottom: number
  left: number
  top: number
  width: number
}

export interface N1162A {
  left: number
  right: number
  top: number
  width: number
  height: number
  bottom: number
}

export interface N196A {
  bottom: number
  width: number
  right: number
  left: number
  height: number
  top: number
}

export interface N172A {
  height: number
  bottom: number
  right: number
  left: number
  width: number
  top: number
}

export interface N1149A {
  width: number
  right: number
  height: number
  top: number
  bottom: number
  left: number
}

export interface N1251Link {
  left: number
  bottom: number
  height: number
  right: number
  width: number
  top: number
}

export interface N1118A {
  width: number
  height: number
  left: number
  right: number
  top: number
  bottom: number
}

export interface N17A {
  height: number
  left: number
  right: number
  width: number
  top: number
  bottom: number
}

export interface N1173A {
  top: number
  height: number
  left: number
  width: number
  bottom: number
  right: number
}

export interface N1224Img {
  width: number
  right: number
  bottom: number
  left: number
  top: number
  height: number
}

export interface N1152A {
  left: number
  width: number
  right: number
  bottom: number
  top: number
  height: number
}

export interface N1203A {
  bottom: number
  right: number
  height: number
  left: number
  top: number
  width: number
}

export interface N1249Img {
  height: number
  right: number
  left: number
  bottom: number
  top: number
  width: number
}

export interface N195A {
  top: number
  height: number
  bottom: number
  right: number
  width: number
  left: number
}

export interface N132A {
  height: number
  width: number
  right: number
  top: number
  bottom: number
  left: number
}

export interface N1112A {
  left: number
  right: number
  height: number
  bottom: number
  top: number
  width: number
}

export interface N14A {
  height: number
  left: number
  bottom: number
  width: number
  right: number
  top: number
}

export interface N1303Meta {
  height: number
  top: number
  right: number
  left: number
  width: number
  bottom: number
}

export interface Page0Img {
  right: number
  left: number
  height: number
  width: number
  bottom: number
  top: number
}

export interface N1245Img {
  bottom: number
  top: number
  height: number
  left: number
  width: number
  right: number
}

export interface N1164A {
  right: number
  left: number
  width: number
  top: number
  bottom: number
  height: number
}

export interface N1211Div {
  bottom: number
  top: number
  height: number
  left: number
  width: number
  right: number
}

export interface Page6DevsiteProgress {
  bottom: number
  top: number
  width: number
  left: number
  right: number
  height: number
}

export interface N135A {
  width: number
  right: number
  top: number
  height: number
  left: number
  bottom: number
}

export interface N1273Link {
  left: number
  width: number
  right: number
  top: number
  height: number
  bottom: number
}

export interface N155A {
  top: number
  right: number
  left: number
  width: number
  bottom: number
  height: number
}

export interface N1266Link {
  top: number
  bottom: number
  width: number
  right: number
  height: number
  left: number
}

export interface N1289Meta {
  top: number
  width: number
  left: number
  right: number
  height: number
  bottom: number
}

export interface N147A {
  left: number
  width: number
  height: number
  right: number
  top: number
  bottom: number
}

export interface N1208A {
  height: number
  width: number
  bottom: number
  left: number
  right: number
  top: number
}

export interface N1254Link {
  bottom: number
  left: number
  height: number
  right: number
  width: number
  top: number
}

export interface N1156A {
  left: number
  right: number
  width: number
  top: number
  height: number
  bottom: number
}

export interface N1235Img {
  width: number
  left: number
  right: number
  bottom: number
  top: number
  height: number
}

export interface N1227Img {
  width: number
  right: number
  left: number
  bottom: number
  top: number
  height: number
}

export interface N1141A {
  right: number
  height: number
  width: number
  bottom: number
  top: number
  left: number
}

export interface N1238Img {
  right: number
  bottom: number
  height: number
  top: number
  left: number
  width: number
}

export interface N122A {
  right: number
  top: number
  bottom: number
  height: number
  width: number
  left: number
}

export interface N189A {
  width: number
  left: number
  bottom: number
  top: number
  height: number
  right: number
}

export interface N1269Link {
  left: number
  bottom: number
  top: number
  right: number
  width: number
  height: number
}

export interface N121A {
  height: number
  width: number
  bottom: number
  top: number
  right: number
  left: number
}

export interface N1292Meta {
  left: number
  width: number
  top: number
  right: number
  height: number
  bottom: number
}

export interface N1299Meta {
  left: number
  right: number
  top: number
  height: number
  bottom: number
  width: number
}

export interface N1200A {
  bottom: number
  height: number
  width: number
  right: number
  left: number
  top: number
}

export interface N1145A {
  top: number
  height: number
  right: number
  bottom: number
  left: number
  width: number
}

export interface N1142A {
  bottom: number
  left: number
  width: number
  right: number
  top: number
  height: number
}

export interface N161A {
  width: number
  right: number
  left: number
  height: number
  top: number
  bottom: number
}

export interface N1281Link {
  width: number
  right: number
  height: number
  bottom: number
  left: number
  top: number
}

export interface N176A {
  right: number
  height: number
  width: number
  left: number
  top: number
  bottom: number
}

export interface N1186A {
  right: number
  left: number
  bottom: number
  width: number
  top: number
  height: number
}

export interface N1114A {
  left: number
  right: number
  height: number
  top: number
  width: number
  bottom: number
}

export interface N1121A {
  width: number
  top: number
  height: number
  left: number
  bottom: number
  right: number
}

export interface N1283Link {
  left: number
  bottom: number
  height: number
  width: number
  top: number
  right: number
}

export interface N198A {
  height: number
  bottom: number
  right: number
  top: number
  width: number
  left: number
}

export interface N1296Meta {
  bottom: number
  left: number
  height: number
  right: number
  top: number
  width: number
}

export interface N1108A {
  left: number
  height: number
  width: number
  right: number
  bottom: number
  top: number
}

export interface N1183A {
  top: number
  left: number
  height: number
  bottom: number
  right: number
  width: number
}

export interface N110DevsiteLanguageSelector {
  bottom: number
  right: number
  top: number
  height: number
  left: number
  width: number
}

export interface N1274Link {
  width: number
  left: number
  top: number
  height: number
  bottom: number
  right: number
}

export interface N1192A {
  right: number
  bottom: number
  width: number
  left: number
  height: number
  top: number
}

export interface N1143A {
  width: number
  bottom: number
  right: number
  height: number
  left: number
  top: number
}

export interface N1226Img {
  right: number
  top: number
  bottom: number
  width: number
  height: number
  left: number
}

export interface N112A {
  bottom: number
  width: number
  left: number
  height: number
  right: number
  top: number
}

export interface N1100A {
  right: number
  left: number
  width: number
  bottom: number
  height: number
  top: number
}

export interface N1131A {
  top: number
  width: number
  left: number
  height: number
  right: number
  bottom: number
}

export interface N178A {
  left: number
  bottom: number
  top: number
  right: number
  width: number
  height: number
}

export interface N1225Img {
  left: number
  width: number
  bottom: number
  right: number
  height: number
  top: number
}

export interface N1263Link {
  top: number
  left: number
  height: number
  width: number
  bottom: number
  right: number
}

export interface N1202A {
  top: number
  right: number
  height: number
  left: number
  bottom: number
  width: number
}

export interface N1291Meta {
  height: number
  bottom: number
  right: number
  top: number
  width: number
  left: number
}

export interface N1193A {
  top: number
  right: number
  width: number
  left: number
  bottom: number
  height: number
}

export interface N165A {
  left: number
  height: number
  top: number
  width: number
  bottom: number
  right: number
}

export interface N1189A {
  height: number
  bottom: number
  top: number
  right: number
  left: number
  width: number
}

export interface N1267Link {
  bottom: number
  height: number
  width: number
  top: number
  left: number
  right: number
}

export interface N1252Link {
  left: number
  width: number
  right: number
  top: number
  height: number
  bottom: number
}

export interface N177A {
  height: number
  width: number
  right: number
  left: number
  top: number
  bottom: number
}

export interface N180A {
  height: number
  width: number
  left: number
  right: number
  bottom: number
  top: number
}

export interface N1132A {
  left: number
  bottom: number
  height: number
  right: number
  width: number
  top: number
}

export interface N1120A {
  width: number
  left: number
  height: number
  top: number
  bottom: number
  right: number
}

export interface N1230Img {
  top: number
  height: number
  left: number
  width: number
  right: number
  bottom: number
}

export interface N1215Input {
  height: number
  right: number
  width: number
  bottom: number
  top: number
  left: number
}

export interface N1250Link {
  left: number
  top: number
  right: number
  height: number
  width: number
  bottom: number
}

export interface N1259Link {
  top: number
  bottom: number
  width: number
  right: number
  height: number
  left: number
}

export interface N118A {
  left: number
  bottom: number
  height: number
  width: number
  right: number
  top: number
}

export interface N149A {
  right: number
  width: number
  height: number
  bottom: number
  left: number
  top: number
}

export interface N1205A {
  right: number
  height: number
  bottom: number
  top: number
  left: number
  width: number
}

export interface N1122A {
  top: number
  width: number
  left: number
  bottom: number
  right: number
  height: number
}

export interface N1194A {
  width: number
  left: number
  top: number
  height: number
  right: number
  bottom: number
}

export interface N1262Link {
  left: number
  top: number
  right: number
  width: number
  bottom: number
  height: number
}

export interface N179A {
  bottom: number
  width: number
  right: number
  top: number
  height: number
  left: number
}

export interface N1197A {
  width: number
  right: number
  left: number
  top: number
  bottom: number
  height: number
}

export interface N1168A {
  right: number
  top: number
  width: number
  bottom: number
  left: number
  height: number
}

export interface N1214Input {
  width: number
  right: number
  height: number
  left: number
  bottom: number
  top: number
}

export interface N116A {
  right: number
  bottom: number
  width: number
  height: number
  top: number
  left: number
}

export interface N1258Link {
  right: number
  width: number
  bottom: number
  top: number
  height: number
  left: number
}

export interface N1239Img {
  right: number
  width: number
  height: number
  left: number
  bottom: number
  top: number
}

export interface N1241Img {
  left: number
  top: number
  bottom: number
  width: number
  right: number
  height: number
}

export interface N160A {
  bottom: number
  top: number
  right: number
  height: number
  left: number
  width: number
}

export interface N190A {
  height: number
  left: number
  bottom: number
  right: number
  width: number
  top: number
}

export interface N1223Img {
  left: number
  top: number
  bottom: number
  width: number
  height: number
  right: number
}

export interface N1298Meta {
  height: number
  right: number
  bottom: number
  left: number
  width: number
  top: number
}

export interface N1243Img {
  right: number
  bottom: number
  height: number
  width: number
  left: number
  top: number
}

export interface N145A {
  right: number
  bottom: number
  top: number
  width: number
  left: number
  height: number
}

export interface N193A {
  width: number
  right: number
  height: number
  bottom: number
  top: number
  left: number
}

export interface N1105A {
  bottom: number
  width: number
  right: number
  top: number
  height: number
  left: number
}

export interface N1113A {
  left: number
  width: number
  top: number
  right: number
  bottom: number
  height: number
}

export interface N1234Img {
  width: number
  bottom: number
  height: number
  left: number
  right: number
  top: number
}

export interface N1198A {
  top: number
  height: number
  bottom: number
  right: number
  width: number
  left: number
}

export interface N1104A {
  height: number
  top: number
  width: number
  bottom: number
  right: number
  left: number
}

export interface N1228Img {
  left: number
  width: number
  right: number
  height: number
  bottom: number
  top: number
}

export interface N1134A {
  bottom: number
  right: number
  height: number
  top: number
  left: number
  width: number
}

export interface N134A {
  left: number
  height: number
  width: number
  bottom: number
  top: number
  right: number
}

export interface N126A {
  right: number
  left: number
  top: number
  bottom: number
  width: number
  height: number
}

export interface N162A {
  right: number
  bottom: number
  height: number
  left: number
  width: number
  top: number
}

export interface N1172A {
  height: number
  left: number
  top: number
  width: number
  right: number
  bottom: number
}

export interface N1155A {
  bottom: number
  right: number
  left: number
  width: number
  top: number
  height: number
}

export interface Page5Div {
  right: number
  height: number
  bottom: number
  left: number
  top: number
  width: number
}

export interface N185A {
  bottom: number
  height: number
  width: number
  right: number
  top: number
  left: number
}

export interface N1233Img {
  right: number
  left: number
  width: number
  top: number
  height: number
  bottom: number
}

export interface N166A {
  right: number
  top: number
  width: number
  height: number
  bottom: number
  left: number
}

export interface N174A {
  width: number
  bottom: number
  left: number
  right: number
  height: number
  top: number
}

export interface N1217Img {
  left: number
  bottom: number
  right: number
  height: number
  width: number
  top: number
}

export interface N182A {
  right: number
  width: number
  bottom: number
  top: number
  left: number
  height: number
}

export interface N191A {
  right: number
  left: number
  bottom: number
  top: number
  width: number
  height: number
}

export interface Page2Div {
  width: number
  right: number
  height: number
  bottom: number
  left: number
  top: number
}

export interface N1182A {
  height: number
  right: number
  bottom: number
  top: number
  left: number
  width: number
}

export interface N1218Img {
  height: number
  top: number
  left: number
  bottom: number
  right: number
  width: number
}

export interface N1220Img {
  top: number
  left: number
  right: number
  width: number
  height: number
  bottom: number
}

export interface N136A {
  height: number
  right: number
  bottom: number
  left: number
  width: number
  top: number
}

export interface N123A {
  left: number
  right: number
  width: number
  bottom: number
  top: number
  height: number
}

export interface N1302Meta {
  top: number
  bottom: number
  width: number
  left: number
  height: number
  right: number
}

export interface N1150A {
  bottom: number
  left: number
  top: number
  right: number
  height: number
  width: number
}

export interface N18A {
  right: number
  left: number
  top: number
  width: number
  height: number
  bottom: number
}

export interface N199A {
  top: number
  width: number
  bottom: number
  left: number
  height: number
  right: number
}

export interface N130A {
  bottom: number
  height: number
  right: number
  top: number
  left: number
  width: number
}

export interface N1237Img {
  width: number
  height: number
  top: number
  bottom: number
  left: number
  right: number
}

export interface N1111A {
  height: number
  right: number
  bottom: number
  top: number
  left: number
  width: number
}

export interface N1125A {
  right: number
  top: number
  left: number
  width: number
  height: number
  bottom: number
}

export interface N1221Img {
  height: number
  left: number
  top: number
  bottom: number
  width: number
  right: number
}

export interface N1184A {
  top: number
  bottom: number
  width: number
  right: number
  left: number
  height: number
}

export interface N158A {
  right: number
  width: number
  bottom: number
  left: number
  height: number
  top: number
}

export interface N138A {
  height: number
  right: number
  left: number
  bottom: number
  top: number
  width: number
}

export interface N1242Img {
  left: number
  height: number
  width: number
  right: number
  bottom: number
  top: number
}

export interface N1280Link {
  left: number
  width: number
  top: number
  height: number
  right: number
  bottom: number
}

export interface N11A {
  right: number
  top: number
  height: number
  width: number
  bottom: number
  left: number
}

export interface N1297Meta {
  height: number
  left: number
  width: number
  top: number
  bottom: number
  right: number
}

export interface N197A {
  right: number
  width: number
  left: number
  height: number
  top: number
  bottom: number
}

export interface N1188A {
  bottom: number
  height: number
  right: number
  width: number
  top: number
  left: number
}

export interface N1127A {
  left: number
  width: number
  bottom: number
  right: number
  height: number
  top: number
}

export interface N1175A {
  bottom: number
  right: number
  left: number
  width: number
  top: number
  height: number
}

export interface N1116A {
  left: number
  bottom: number
  top: number
  width: number
  height: number
  right: number
}

export interface N1236Img {
  top: number
  height: number
  width: number
  left: number
  bottom: number
  right: number
}

export interface N148A {
  left: number
  right: number
  bottom: number
  width: number
  top: number
  height: number
}

export interface N1115A {
  width: number
  right: number
  bottom: number
  top: number
  left: number
  height: number
}

export interface N1216Img {
  top: number
  bottom: number
  right: number
  left: number
  height: number
  width: number
}

export interface N1260Link {
  right: number
  top: number
  width: number
  height: number
  left: number
  bottom: number
}

export interface N1133A {
  bottom: number
  right: number
  width: number
  top: number
  left: number
  height: number
}

export interface N140A {
  bottom: number
  left: number
  width: number
  height: number
  right: number
  top: number
}

export interface N1177A {
  top: number
  left: number
  height: number
  right: number
  bottom: number
  width: number
}

export interface N1129A {
  left: number
  right: number
  bottom: number
  height: number
  top: number
  width: number
}

export interface N1107A {
  right: number
  width: number
  bottom: number
  left: number
  top: number
  height: number
}

export interface N1301Meta {
  width: number
  top: number
  bottom: number
  height: number
  left: number
  right: number
}

export interface N1240Img {
  top: number
  bottom: number
  width: number
  height: number
  right: number
  left: number
}

export interface N1288Meta {
  right: number
  top: number
  bottom: number
  left: number
  height: number
  width: number
}

export interface N19A {
  height: number
  right: number
  width: number
  top: number
  left: number
  bottom: number
}

export interface N175A {
  height: number
  left: number
  width: number
  right: number
  bottom: number
  top: number
}

export interface N1167A {
  top: number
  right: number
  width: number
  left: number
  bottom: number
  height: number
}

export interface N1110A {
  left: number
  height: number
  right: number
  bottom: number
  top: number
  width: number
}

export interface N1212Ul {
  width: number
  top: number
  height: number
  left: number
  bottom: number
  right: number
}

export interface Screenshot {
  data: string
  width: number
  height: number
}
