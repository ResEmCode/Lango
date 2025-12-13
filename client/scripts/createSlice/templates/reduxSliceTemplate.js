const firstCharUpperCase = require('../utils/firstCharUpperCase');

module.exports = (sliceName) => {
  const sliceNameWithFirstUpperCase = firstCharUpperCase(sliceName);
  const schemaName = sliceNameWithFirstUpperCase + 'Schema';
  const sliceFullName = sliceName + 'Slice';

  return `
    import { createSlice } from '@reduxjs/toolkit';
    import type { PayloadAction } from '@reduxjs/toolkit';
    import { ${schemaName} } from '../types/${schemaName}';

    const initialState: ${schemaName} = {
    isLoading: false
    };

    export const ${sliceFullName} = createSlice({
    name: '${sliceName}',
    initialState,
    reducers: {
        template: (state, action: PayloadAction<string>) => {
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(, (state) => {
    //             state.isLoading = false;
    //         })
    //         .addCase(, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
    });

    export const { actions: ${sliceName}Actions } = ${sliceFullName};
    export const { reducer: ${sliceName}Reducer } = ${sliceFullName};
    
    `;
};