declare module "*.jpg"
declare module "*.jpeg"
declare module "*.png"

declare module "*.svg" {
    import React from 'react'
    const SVG: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default SVG;
}