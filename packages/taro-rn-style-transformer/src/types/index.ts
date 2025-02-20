export interface TransformOptions {
  dev: boolean
  hot: boolean
  minify: boolean
  platform: 'android' | 'ios'
  projectRoot: string
  publicPath: string
  customTransformOptions: any
}

export const enum LogLevelEnum {
  ERROR = 'error',
  WARNING = 'warning',
}

export interface ResolveStyleOptions {
  basedir: string
  platform: 'android' | 'ios'
  paths?: string[]
  logLevel?: LogLevelEnum
  defaultExt?: string
  alias?: Record<string, string>
}

export interface RenderResult {
  css: string | Buffer
  map?: string | Buffer
}

export interface RenderAdditionalResult extends RenderResult {
  additionalData: string
}
