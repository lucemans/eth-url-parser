declare type ETHAddress = string;
declare type ENSName = string;
declare type ParseResult = {
    scheme: 'ethereum';
    prefix?: 'pay' | string;
    target_address: ETHAddress | ENSName;
    function_name?: string;
    chain_id?: `${number}`;
    parameters?: Partial<{
        value: `${number}`;
        gas: `${number}`;
        gasPrice: '${number}';
    }>;
};
/**
 * Parse an Ethereum URI according to ERC-831 and ERC-681
 *
 * @param  {string} uri string.
 *
 * @return {object}
 */
declare function parse(uri: any): ParseResult;
/**
 * Builds a valid Ethereum URI based on the initial parameters
 * @param  {object} data
 *
 * @return {string}
 */
declare function build({ prefix, target_address, chain_id, function_name, parameters, }: ParseResult): string;

export { ETHAddress, ENSName, ParseResult, parse, build };
