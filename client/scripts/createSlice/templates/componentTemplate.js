const firstCharUpperCase = require('../utils/firstCharUpperCase');

module.exports = (sliceName) => {
  const componentName = firstCharUpperCase(sliceName);
  const interfaceName = componentName + 'Props';

  return `
    import clsx from "clsx";
    import styles from './${componentName}.module.scss';
    import { memo } from 'react';

    interface ${interfaceName} {
        className?:string
    }

    export const ${componentName} = memo((props: ${interfaceName}) => {
        const { className } = props;

        return <div className={clsx(styles.${sliceName}, [className])}>Template</div>
    })
    `;
};