                                useResult =
                                    lastLocation.kind === SyntaxKind.Parameter ||
                                    (
                                        lastLocation === (<FunctionLikeDeclaration>location).type &&
                                        result.valueDeclaration.kind === SyntaxKind.Parameter
                                    );
