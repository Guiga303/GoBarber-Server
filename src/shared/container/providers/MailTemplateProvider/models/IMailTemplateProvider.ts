import IParseMailTemplateDTO from '../dtos/IParseMailTemplateProviderDTO';

export default interface IMailTemplateProvider {
  parse(data: IParseMailTemplateDTO): Promise<string>;
}
